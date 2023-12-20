from server.Game.Deck import influences_dict
from server.Players import Players
from server.Log import Log
from server.Game.BaseState import BaseState
from server.Game.Action import actions_dict

class ChallengeState(BaseState):
    def __init__(self):
        self.active = False
        self.card_claimed = None
        self.action_id = None
        self.source_id = None
        self.source_name = None
        self.target_id = None
        self.target_name = None
        self.from_block = False
        self.pending_player_ids = []

    def activate(self, card_claimed_id, action_id, source_id, from_block, players: Players, target_id = None):
        self.validate_active_state(source_id, target_id, players)
        self.active = True
        self.card_claimed = influences_dict[card_claimed_id]
        self.action_id = action_id
        self.source_id = source_id
        self.source_name = players.get_player(self.source_id).name if self.source_id else None
        self.from_block = from_block
        self.target_id = target_id
        self.target_name = players.get_player(self.target_id).name if self.target_id else None
        pending_player_ids = []
        for player in players.get_players():
            if player.id != source_id and not player.lost:
                pending_player_ids.append(player.id)
        self.pending_player_ids = pending_player_ids

        pending_player_names = []
        for player_id in self.pending_player_ids:
            player_name = players.get_player(player_id).name
            pending_player_names.append(player_name)

        action_name = actions_dict[action_id].name
        source_player_name = players.get_player(source_id).name
        base_message = f'{source_player_name} is attempting to {action_name}.'
        add_message = f'Waiting for {" ".join(pending_player_names)} to block or pass.'

        self.default_message = base_message + ' ' + add_message
        self.decision_message = base_message

    def validate_active_state(self, source_id, target_id, players: Players):
        source_player = players.get_player(source_id)
        target_player = players.get_player(target_id)
        log = ''
        if not source_player or source_player.lost:
            log = 'Lost source player in active challenge state'
            Log.add_log(log)
            raise Exception(log)
        if target_id and (not target_player or target_player.lost):
            log = 'Lost target player in active challenge state'
            Log.add_log(log)
            raise Exception(log)

    def to_dict(self):
        return { 
                'active': self.active,
                'cardClaimed': self.card_claimed.to_dict() if self.card_claimed is not None else None,
                'actionId': self.action_id,
                'sourceId': self.source_id,
                'sourceName': self.source_name,
                'targetId': self.target_id,
                'targetName': self.target_name,
                'fromBlock': self.from_block,
                'pendingPlayerIds': self.pending_player_ids,
            }
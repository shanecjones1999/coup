from server.Game.Deck import influences_dict
from server.Players import Players
from server.Log import Log
from server.Game.BaseState import BaseState
from server.CoupException import CoupException
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
        self.default_message = ''
        self.decision_message = ''

    def activate(self, card_claimed_id, action_id, source_id, from_block, players: Players, target_id = None):
        self.validate_active_state(source_id, target_id, players)
        self.active = True
        self.card_claimed = influences_dict[card_claimed_id]
        self.action_id = action_id
        self.source_id = source_id
        self.source_name = players.get_player(self.source_id).name if self.source_id else None
        self.from_block = from_block
        self.target_id = target_id
        self.target_name = players.get_player(self.target_id).name if self.target_id else ''
        pending_player_ids = []
        for player in players.get_players():
            if player.id != source_id and not player.lost:
                pending_player_ids.append(player.id)
        self.pending_player_ids = pending_player_ids

        self.set_messages(players)

    def validate_active_state(self, source_id, target_id, players: Players):
        source_player = players.get_player(source_id)
        target_player = players.get_player(target_id)
        log = ''
        if not source_player or source_player.lost:
            log = 'Lost source player in active challenge state'
            Log.add_log(log)
            raise CoupException(log)
        if target_id and (not target_player or target_player.lost):
            log = 'Lost target player in active challenge state'
            Log.add_log(log)
            raise CoupException(log)

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
                'defaultMessage': self.default_message,
                'decisionMessage': self.decision_message,
            }
    
    def set_messages(self, players: Players):
        if self.from_block:
            source_name = players.get_player(self.source_id).name
            target_name = players.get_player(self.target_id).name if self.target_id else ''
            action_name = action_name = actions_dict[self.action_id].name

            base_message = f'{source_name} is attempting to block {action_name.lower()} as {influences_dict[self.card_claimed.type_id].name}.'

            pending_player_names = []
            for player_id in self.pending_player_ids:
                player_name = players.get_player(player_id).name
                pending_player_names.append(player_name)

            add_message = f'Waiting for {", ".join(pending_player_names)} to challenge or pass.'

            self.decision_message = base_message
            self.default_message = base_message + ' ' + add_message
        else:
            source_name = players.get_player(self.source_id).name
            target_name = players.get_player(self.target_id).name if self.target_id else ''
            action_name = action_name = actions_dict[self.action_id].name

            base_message = f'{source_name} is attempting to {action_name.lower()}'

            action_id = self.action_id
            if action_id == 2 or action_id == 4 or action_id == 6:
                base_message += '.'
            elif action_id == 5:
                base_message += f' {target_name}.'
            elif action_id == 7:
                base_message += f' from {target_name}.'
            else:
                raise CoupException('Invalid action Id')
            
            pending_player_names = []
            for player_id in self.pending_player_ids:
                player_name = players.get_player(player_id).name
                pending_player_names.append(player_name)

            add_message = f'Waiting for {" ".join(pending_player_names)} to challenge or pass.'

            self.decision_message = base_message
            self.default_message = base_message + ' ' + add_message

    def remove_pending_player(self, player_id: int, players: Players):
        if player_id not in self.pending_player_ids:
            raise CoupException('Attempting to remove player from pending block players that does not exist')
        self.pending_player_ids.remove(player_id)
        self.set_messages(players)
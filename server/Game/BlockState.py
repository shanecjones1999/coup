from server.Game.Deck import influences_dict
from server.Players import Players
from server.Game.BaseState import BaseState
from server.Game.Action import actions_dict
from server.CoupException import CoupException

class BlockState(BaseState):
    def __init__(self):
        self.active = False
        self.action_id = None
        self.source_id = None
        self.target_id = None
        self.block_cards = []
        self.pending_player_ids = []
        self.player_ids = []
        self.default_message = ''
        self.decision_message = ''

    def activate(self, action_id, source_id, players: Players, target_id = None):
        self.active = True
        self.action_id = action_id
        self.source_id = source_id
        self.target_id = target_id
        for influence in influences_dict.values():
            if influence.block_action_id == action_id:
                self.block_cards.append(influence.to_dict())

        # All players can block foreign aid (make sure they haven't lost)
        if action_id == 2:
            pending_player_ids = []
            for player in players.get_players():
                if player.id != source_id and not player.lost:
                    pending_player_ids.append(player.id)
            self.pending_player_ids = pending_player_ids
        # Only the target player can block (will be assassinate or steal)
        else:
            if players.get_player(target_id).lost:
                raise CoupException('Blocked player has already lost')
            self.pending_player_ids = [target_id]
        
        self.set_messages(players)

    def to_dict(self):
        return { 
                'active': self.active, 
                'actionId': self.action_id,
                'sourceId': self.source_id,
                'targetId': self.target_id,
                'blockCards': self.block_cards,
                'pendingPlayerIds': self.pending_player_ids,
                'defaultMessage': self.default_message,
                'decisionMessage': self.decision_message,
            }
    
    def set_messages(self, players: Players):
        source_name = players.get_player(self.source_id).name
        target_name = players.get_player(self.target_id).name if self.target_id else ''

        action_id = self.action_id
        action_name = action_name = actions_dict[action_id].name
        
        base_message = f'{source_name} is attempting to {action_name.lower()}'
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

        add_message = f'Waiting for {", ".join(pending_player_names)} to block or pass.'

        self.decision_message = base_message
        self.default_message = base_message + ' ' + add_message

    def remove_pending_player(self, player_id: int, players: Players):
        if player_id not in self.pending_player_ids:
            raise CoupException('Attempting to remove player from pending block players that does not exist')
        self.pending_player_ids.remove(player_id)
        self.set_messages(players)
    
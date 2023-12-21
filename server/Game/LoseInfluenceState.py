from server.Game.BaseState import BaseState
from server.Game.Player import Player

class LoseInfluenceState(BaseState):
    def __init__(self):
        self.active = False
        self.player_id = None
        # We will handle lose influence states separately when they come from reveal states vs when they come from
        # coup or assassination action handling
        self.from_reveal_state: bool = None

        self.default_message = ''

    # who is losing influence
    # if they only have one card, they lose
    def activate(self, player: Player, from_reveal_state):
        self.active = True
        self.player_id = player.id
        self.from_reveal_state = from_reveal_state
        self.default_message = f'Waiting for {player.name} to select an influence to lose.'
    
    def to_dict(self):
        return {
            'active': self.active,
            'playerId': self.player_id,
            'fromRevealState': self.from_reveal_state,
            'defaultMessage': self.default_message,
        }
from server.Game.BaseState import BaseState
from server.Game.Player import Player

class RevealCardState(BaseState):
    def __init__(self):
        self.active = False
        self.revealer_id = None
        self.challenger_id = None
        self.default_message = ''
        self.decision_message = ''

    def activate(self, revealer: Player, challenger: Player, card_name: str):
        self.active = True
        self.revealer_id = revealer.id
        self.challenger_id = challenger.id
        self.default_message = f'Waiting for {revealer.name} to select an influence to reveal.'
        self.decision_message = f'Your claim of {card_name} has been challenged. Select an influence to reveal.'

    def to_dict(self):
        return {
            'active': self.active,
            'revealerId': self.revealer_id,
            'challengerId': self.challenger_id,
            'defaultMessage': self.default_message,
            'decisionMessage': self.decision_message,
        }
from server.Game.BaseState import BaseState

class RevealCardState(BaseState):
    def __init__(self):
        self.active = False
        self.revealer_id = None
        self.challenger_id = None

    def activate(self, revealer_id, challenger_id):
        self.active = True
        self.revealer_id = revealer_id
        self.challenger_id = challenger_id

    def to_dict(self):
        return {
            'active': self.active,
            'revealerId': self.revealer_id,
            'challengerId': self.challenger_id,
        }
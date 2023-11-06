class RevealCardState:
    def __init__(self):
        self.active = False
        self.revealer_id = None
        self.challenger_id = None

    def activate_reveal_card_state(self, revealer_id, challenger_id):
        self.active = True
        self.revealer_id = revealer_id
        self.challenger_id = challenger_id

    def reset(self):
        self.active = False
        self.revealer_id = None
        self.challenger_id = None

    def to_dict(self):
        return {
            'active': self.active,
            'revealerId': self.revealer_id,
            'challengerId': self.challenger_id,
        }
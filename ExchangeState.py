class ExchangeState:
    def __init__(self):
        self.active = False
        self.player_id = None
        self.cards = []

    def activate_exchange_state(self, player_id, deck):
        self.active = True
        self.player_id = player_id
        self.cards = deck.draw(2)

    def reset(self):
        self.active = False
        self.player_id = None
        self.cards = []

    def to_dict(self):
        return {
            'active': self.active,
            'playerId': self.player_id,
            'cards': [card.to_dict() for card in self.cards]
        }
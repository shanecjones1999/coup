class ExchangeState:
    def __init__(self):
        self.active = False
        self.player_id = None
        self.cards = []
        self.expected_exchange_count = 0

    def activate(self, player, deck):
        self.active = True
        self.player_id = player.id
        self.expected_exchange_count = sum(1 for card in player.cards if not card.revealed)
        self.cards = deck.draw(self.expected_exchange_count)

    def reset(self):
        self.active = False
        self.player_id = None
        self.cards = []
        self.expected_exchange_count = 0

    def to_dict(self):
        return {
            'active': self.active,
            'playerId': self.player_id,
            'expectedExchangeCount': self.expected_exchange_count,
        }
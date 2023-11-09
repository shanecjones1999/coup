class ExchangeState:
    def __init__(self):
        self.active = False
        self.player_id = None
        self.cards = []
        self.expected_exchange_count = 0

    def activate_exchange_state(self, player, deck):
        self.active = True
        self.player_id = player.id
        self.cards = deck.draw(2)
        self.expected_exchange_count = sum(1 for card in player.cards if not card.revealed)

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
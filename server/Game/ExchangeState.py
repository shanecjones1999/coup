from server.Game.Deck import Deck
from server.Game.BaseState import BaseState
from server.Game.Player import Player

class ExchangeState(BaseState):
    def __init__(self):
        self.active = False
        self.player_id = None
        self.cards = []
        self.expected_exchange_count = 0
        self.default_message = ''

    def activate(self, player: Player, deck: Deck):
        self.active = True
        self.player_id = player.id
        self.expected_exchange_count = sum(1 for card in player.cards if not card.revealed)
        self.cards = deck.draw(2)
        self.default_message = f'Waiting for {player.name} to exchange with the court deck.'

    def to_dict(self):
        return {
            'active': self.active,
            'playerId': self.player_id,
            'expectedExchangeCount': self.expected_exchange_count,
            'defaultMessage': self.default_message,
        }
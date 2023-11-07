import random
import string

class Player:
    def __init__(self, name, token):
        self.name = name
        self.id = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(8))
        self.coins = 2
        self.cards = []
        self.token = token
        self.is_turn = False
        self.lost = False
    
    def lose_influence(self, card_id):
        card_lost = False
        for card in self.cards:
            if card.id == card_id and not card.revealed and not card_lost:
                card.revealed = True
                card_lost = True
        if not card_lost:
            raise Exception("Card not lost")
        self.update_lost()

    def update_lost(self):
        lost = True
        for card in self.cards:
            if not card.revealed:
                lost = False
        self.lost = lost

    def to_dict(self):
        return { 'name': self.name, 
                'cards': [card.to_dict(True) for card in self.cards],
                'coins': self.coins,
                'id': self.id,
                'isTurn': self.is_turn,
                'lost': self.lost,
            }
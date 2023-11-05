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
        for card in self.cards:
            if card.id == card_id:
                card.revealed = True
                break
        self.update_lost()

    def update_lost(self):
        lost = True
        for card in self.cards:
            if not card.revealed:
                lost = False
        self.lost = lost

    def to_dict(self):
        return { 'name': self.name, 
                'cards': [card.to_dict() for card in self.cards],
                'coins': self.coins,
                'id': self.id,
                'isTurn': self.is_turn,
                'lost': self.lost,
            }
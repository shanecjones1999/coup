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

    def to_dict(self):
        return { 'name': self.name, 
                'cards': [card.to_dict() for card in self.cards], 
                'id': self.id,
                'isTurn': self.is_turn,
            }
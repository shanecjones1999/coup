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

    def has_card(self, card_id):
        has_card = False
        for card in self.cards:
            if card.id == card_id:
                return True
        return has_card

    def remove_card(self, card_id):
        new_cards = []
        removed = False
        removed_card = None
        for card in self.cards:
            if not removed and card.id == card_id:
                removed = True
                removed_card = card
            else:
                new_cards.append(card)
        self.cards = new_cards
        return removed_card
    
    def lose_influence(self, card_id):
        lost_influence = False
        for card in self.cards:
            if not lost_influence and card.id == card_id:
                card.revealed = True
                lost_influence = True
                break

    def to_dict(self):
        return { 'name': self.name, 
                'cards': [card.to_dict() for card in self.cards],
                'coins': self.coins,
                'id': self.id,
                'isTurn': self.is_turn,
            }
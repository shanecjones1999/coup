import random
import string
from server.CoupException import CoupException

class Player:
    def __init__(self, name: string, token: string):
        self.name = name
        self.id = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(8))
        self.coins = 2
        self.cards = []
        self.token = token
        self.is_turn = False
        self.lost = False
    
    def lose_influence(self, card_id):
        card_lost = False
        lost_card = None
        for card in self.cards:
            if card.id == card_id and not card.revealed and not card_lost:
                card.revealed = True
                card_lost = True
                lost_card = card
        if not card_lost:
            raise CoupException("Card not lost")
        self.update_lost()
        return lost_card

    def update_lost(self) -> None:
        lost = True
        for card in self.cards:
            if not card.revealed:
                lost = False
        self.lost = lost
    
    def remove_card(self, card_id: int):
        removed_index = -1
        removed_card = None
        new_cards = []
        for i, card in enumerate(self.cards):
            if card.id != card_id:
                new_cards.append(card)
            else:
                if card.revealed:
                    raise CoupException('Replacing revealed card back into deck!')
                removed_card = card
                removed_index = i
        if removed_index == -1:
            raise CoupException("Failed to remove card")
        self.cards = new_cards
        return removed_index, removed_card

    def to_dict(self) -> dict:
        return { 'name': self.name, 
                'cards': [card.to_dict(True) for card in self.cards],
                'coins': self.coins,
                'id': self.id,
                'isTurn': self.is_turn,
                'lost': self.lost,
            }
    
    def reset(self):
        self.coins = 2
        self.cards = []
        self.is_turn = False
        self.lost = False
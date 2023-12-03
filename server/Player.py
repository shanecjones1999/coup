import random
import string
from server.Card import Card

class Player:
    def __init__(self, name: string, token: string):
        self.name = name
        self.id = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(8))
        self.coins = 2
        self.cards = []
        self.token = token
        self.is_turn = False
        self.lost = False
    
    def lose_influence(self, card_id) -> None:
        card_lost = False
        for card in self.cards:
            if card.id == card_id and not card.revealed and not card_lost:
                card.revealed = True
                card_lost = True
        if not card_lost:
            raise Exception("Card not lost")
        self.update_lost()

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
                    raise Exception('Replacing revealed card back into deck!')
                removed_card = card
                removed_index = i
        if removed_index == -1:
            raise Exception("Failed to remove card")
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
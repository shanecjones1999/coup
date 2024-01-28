import random
from server.Game.Card import Card
from server.Game.Card import Influence
from server.CoupException import CoupException

influences_dict = {
            1: Influence(1, 'Duke', 4, 2),
            2: Influence(2, 'Assassin', 5, None),
            3: Influence(3, 'Captain', 7, 7),
            4: Influence(4, 'Ambassador', 6, 7),
            5: Influence(5, 'Contessa', None, 5),
        }

total_cards = 15

class Deck:
    def __init__(self):
        cards = []
        id = 1
        for i in range(5):
            for _ in range(3):
                influence = influences_dict[i+1]
                card = Card(id, False, influence)
                cards.append(card)
                id += 1
        self.cards = cards

    def append(self, card):
        self.cards.append(card)

    def shuffle(self):
        random.shuffle(self.cards)

    def draw(self, num_cards):
        self.shuffle()
        drawn_cards = self.cards[-num_cards:]  # Use list slicing to draw cards
        self.cards = self.cards[:-num_cards]  # Update the remaining cards
        return drawn_cards
    
    def exchange(self):
        pass

    def validate(self, num_players: int, exchange_state_active: bool):
        expected_card_count = total_cards - 2 * num_players
        expected_card_count += 2 if exchange_state_active else 0
        if expected_card_count != len(self.cards):
            raise CoupException('Incorrect number of cards in deck')
        
    def get_card_name(self, type_id: int) -> str:
        if type_id not in influences_dict:
            raise CoupException(f'Invalid card type: {type_id}')
        return influences_dict[type_id].name

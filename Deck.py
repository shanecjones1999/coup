import random
from Card import Card

cards = [   
            Card(1, 'Duke', 4, 2, False),
            Card(2, 'Assassin', 5, None, False),
            Card(3, 'Captain', 7, 7, False),
            Card(4, 'Ambassador', 6, 7, False),
            Card(5, 'Contessa', None, 5, False),
        ]

cards_dict = {
            1: Card(1, 'Duke', 4, 2, False),
            2: Card(2, 'Assassin', 5, None, False),
            3: Card(3, 'Captain', 7, 7, False),
            4: Card(4, 'Ambassador', 6, 7, False),
            5: Card(5, 'Contessa', None, 5, False),
        }

class Deck:
    def __init__(self):
        self.cards = [Card(1, 'Duke', 4, 2, False) for _ in range (3)] + \
        [Card(2, 'Assassin', 5, None, False) for _ in range (3)] + \
        [Card(3, 'Captain', 7, 7, False) for _ in range (3)] + \
        [Card(4, 'Ambassador', 6, 7, False) for _ in range (3)] + \
        [Card(5, 'Contessa', None, 5, False) for _ in range (3)]

    def append(self, card):
        self.cards.append(card)

    def shuffle(self):
        random.shuffle(self.cards)

    def draw(self, num_cards):
        self.shuffle()
        drawn_cards = self.cards[-num_cards:]  # Use list slicing to draw cards
        self.cards = self.cards[:-num_cards]  # Update the remaining cards
        return drawn_cards

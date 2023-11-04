import random
from Card import Card

class Deck:
    def __init__(self):
        self.cards = [
            Card(1, 'Duke', 3, 1, False),
            Card(2, 'Assassin', 4, None, False),
            Card(3, 'Captain', 6, 6, False),
            Card(4, 'Ambassador', 5, 6, False),
            Card(5, 'Contessa', None, 4, False),
        ] * 3

    def shuffle(self):
        random.shuffle(self.cards)

    def draw(self, num_cards):
        self.shuffle()
        drawn_cards = self.cards[-num_cards:]  # Use list slicing to draw cards
        self.cards = self.cards[:-num_cards]  # Update the remaining cards
        return drawn_cards

import random
from server.Game.Card import Card
from server.Game.Card import Influence

# cards = [
#             Card(1, 'Duke', 4, 2, False),
#             Card(2, 'Assassin', 5, None, False),
#             Card(3, 'Captain', 7, 7, False),
#             Card(4, 'Ambassador', 6, 7, False),
#             Card(5, 'Contessa', None, 5, False),
#         ]

influences = [
            Influence(1, 'Duke', 4, 2),
            Influence(2, 'Assassin', 5, None),
            Influence(3, 'Captain', 7, 7),
            Influence(4, 'Ambassador', 6, 7),
            Influence(5, 'Contessa', None, 5),
        ]

influences_dict = {
            1: Influence(1, 'Duke', 4, 2),
            2: Influence(2, 'Assassin', 5, None),
            3: Influence(3, 'Captain', 7, 7),
            4: Influence(4, 'Ambassador', 6, 7),
            5: Influence(5, 'Contessa', None, 5),
        }

# cards_dict = {
#             1: Card(1, 1, 'Duke', 4, 2, False),
#             2: Card(2, 2, 'Assassin', 5, None, False),
#             3: Card(3, 3, 'Captain', 7, 7, False),
#             4: Card(4, 4, 'Ambassador', 6, 7, False),
#             5: Card(5, 5, 'Contessa', None, 5, False),
#         }

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

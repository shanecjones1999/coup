class Action:
    def  __init__(self, name, id, card_id, challengeable, block_card_ids, cost):
        self.name = name
        self.id = id
        self.card_id = card_id
        self.challengable = challengeable
        self.block_card_ids = block_card_ids
        self.cost = cost

actions_dict = {
    1: Action('Income', 1, None, False, [], 0),
    2: Action('Foreign Aid', 2, None, False, [1], 0),
    3: Action('Coup', 3, None, False, [], 7),
    4: Action('Tax', 4, 1, True, [], 0),
    5: Action('Assassinate', 5, 2, True, [5], 3),
    6: Action('Exchange', 6, 4, True, [], 0),
    7: Action('Steal', 7, 3, True, [3, 4], 0),
}
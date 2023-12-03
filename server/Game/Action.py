class Action:
    def  __init__(self, name, id, card_id, challengeable, block_card_ids, cost):
        self.name = name
        self.id = id
        self.card_id = card_id
        self.challengable = challengeable
        self.block_card_ids = block_card_ids
        self.cost = cost
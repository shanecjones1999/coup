class Card:
    def __init__(self, id, name, action_id, block_action_id, revealed):
        self.id = id
        self.name = name
        self.action_id = action_id
        self.block_action_id = block_action_id
        self.revealed = revealed

    def to_dict(self):
        return {
            'id': self.id, 
            'name': self.name,
            'action_id': self.action_id, 
            'block_action_id': self.block_action_id,
            'revealed': self.revealed
            }
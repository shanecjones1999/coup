class Card:
    def __init__(self, id, name, action_id, block_action_id, revealed):
        self.id = id
        self.name = name
        self.action_id = action_id
        self.block_action_id = block_action_id
        self.revealed = revealed

    def to_dict(self, hide = False):
        if hide:
            return {
                'id': self.id if self.revealed else None, 
                'name': self.name if self.revealed else 'Unknown',
                'action_id': self.action_id if self.revealed else None, 
                'block_action_id': self.block_action_id if self.revealed else None,
                'revealed': self.revealed
            }
        else:
            return {
                'id': self.id, 
                'name': self.name,
                'action_id': self.action_id, 
                'block_action_id': self.block_action_id,
                'revealed': self.revealed
                }
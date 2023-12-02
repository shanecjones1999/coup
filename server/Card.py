from Influence import Influence

class Card(Influence):
    def __init__(self, id: int, revealed: bool, influence):
        super().__init__(influence.type_id, influence.name, influence.action_id, influence.block_action_id)
        self.id = id
        self.revealed = revealed

    def to_dict(self, hide: bool = False):
        if hide:
            return {
                'id': self.id if self.revealed else None,
                'typeId': self.type_id if self.revealed else None,
                'name': self.name if self.revealed else 'Unknown',
                'action_id': self.action_id if self.revealed else None, 
                'block_action_id': self.block_action_id if self.revealed else None,
                'revealed': self.revealed
            }
        else:
            return {
                'id': self.id, 
                'typeId': self.type_id,
                'name': self.name,
                'action_id': self.action_id, 
                'block_action_id': self.block_action_id,
                'revealed': self.revealed
            }
        

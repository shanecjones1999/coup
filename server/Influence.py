class Influence:
    def __init__(self, type_id, name, action_id, block_action_id):
        self.type_id = type_id
        self.name = name
        self.action_id = action_id
        self.block_action_id = block_action_id

    def to_dict(self):
        return {
            'typeId': self.type_id,
            'name': self.name,
            'action_id': self.action_id, 
            'block_action_id': self.block_action_id,
        }
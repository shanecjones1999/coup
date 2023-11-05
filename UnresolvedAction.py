class UnresolvedAction:
    def __init__(self):
        self.action_id = None
        self.source_id = None
        self.target_id = None
        self.resolved = True
        self.successfully_blocked = False
    
    def set(self, action_id, source_id, target_id):
        self.action_id = action_id
        self.source_id = source_id
        self.target_id = target_id
        self.resolved = False

    def reset(self):
        self.action_id = None
        self.source_id = None
        self.target_id = None
        self.resolved = True
        self.successfully_blocked = False

    def to_dict(self):
        return {
            'actionId': self.action_id,
            'sourceId': self.source_id,
            'targetId': self.target_id,
            'resolved': self.resolved,
            'successfullyBlocked': self.successfully_blocked,
        }
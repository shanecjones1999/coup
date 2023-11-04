class ChallengeState:
    def __init__(self):
        self.active = False
        self.action_id = None
        self.source_id= None
        self.target_id = None
        self.pending_player_ids = []
        self.player_ids = []

    def activate_challenge_state(self, action_id, source_id, target_id = None):
        self.active = True
        self.action_id = action_id
        self.source_id = source_id
        self.target_id = target_id
        self.pending_player_ids = [player_id for player_id in self.player_ids if player_id != source_id]

    def reset(self):
        self.active = False
        self.action_id = None
        self.source_id = None
        self.target_id = None
        self.pending_player_ids = []

    def to_dict(self):
        return { 
                'active': self.active, 
                'actionId': self.action_id,
                'sourceId': self.source_id,
                'targetId': self.target_id,
                'pendingPlayerIds': self.pending_player_ids,
            }
class LoseInfluenceState:
    def __init__(self):
        self.active = False
        self.player_id = None
        # We will handle lose influence states separately when they come from reveal states vs when they come from
        # coup or assassination action handling
        self.from_reveal_state: bool = None

    # who is losing influence
    # if they only have one card, they lose
    def activate_lose_influence_state(self, player_id, from_reveal_state):
        self.active = True
        self.player_id = player_id
        self.from_reveal_state = from_reveal_state
    
    def reset(self):
        self.active = False
        self.player_id = None
        self.from_reveal_state = None


    def to_dict(self):
        return {
            'active': self.active,
            'playerId': self.player_id,
            'fromRevealState': self.from_reveal_state
        }
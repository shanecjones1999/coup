class LoseInfluenceState:
    def __init__(self):
        self.active = False
        self.player_id = None

    # who is losing influence
    # if they only have one card, they lose
    def activate_lose_influence_state(self, player_id):
        self.active = True
        self.player_id = player_id
    
    def reset(self):
        self.active = False
        self.player_id = None

    def to_dict(self):
        return {
            'active': self.active,
            'playerId': self.player_id
        }
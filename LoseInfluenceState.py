class LoseInfluenceState:
    def __init__(self):
        self.active = False
        self.player_id = None

    # who is losing influence
    # if they only have one card, they lose
    def activate_lose_influence_state(self, player):
        player_lost = False
        for card in player.cards:
            if card.revealed:
                player_lost = True
        # Set all cards to revealed
        if player_lost:
            for card in player.cards:
                card.revealed = True
        else:
            self.active = True
            self.player_id = player.id
        return player_lost
    
    def reset(self):
        self.active = False
        self.player_id = None

    def to_dict(self):
        return {
            'active': self.active,
            'playerId': self.player_id
        }
from Deck import cards

class ChallengeState:
    def __init__(self):
        self.active = False
        self.card_claimed = None
        self.action_id = None
        self.source_id= None
        self.target_id = None
        self.from_block = False
        self.pending_player_ids = []
        self.player_ids = []

    def activate_challenge_state(self, card_claimed_id, action_id, source_id, from_block, target_id = None):
        self.active = True
        self.card_claimed = [card for card in cards if card.id == card_claimed_id][0]
        self.action_id = action_id
        self.source_id = source_id
        self.from_block = from_block
        self.target_id = target_id
        self.pending_player_ids = [player_id for player_id in self.player_ids if player_id != source_id]

    def reset(self):
        self.active = False
        self.card_claimed = None
        self.action_id = None
        self.source_id= None
        self.target_id = None
        self.from_block = False
        self.pending_player_ids = []

    def to_dict(self):
        return { 
                'active': self.active,
                'cardClaimed': self.card_claimed.to_dict() if self.card_claimed is not None else None,
                'actionId': self.action_id,
                'sourceId': self.source_id,
                'targetId': self.target_id,
                'fromBlock': self.from_block,
                'pendingPlayerIds': self.pending_player_ids,
            }
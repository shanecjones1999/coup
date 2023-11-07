from Deck import cards_dict

class ChallengeState:
    def __init__(self):
        self.active = False
        self.card_claimed = None
        self.action_id = None
        self.source_id= None
        self.target_id = None
        self.from_block = False
        self.pending_player_ids = []

    def activate_challenge_state(self, card_claimed_id, action_id, source_id, from_block, players, target_id = None):
        self.active = True
        self.card_claimed = cards_dict[card_claimed_id]
        self.action_id = action_id
        self.source_id = source_id
        self.from_block = from_block
        self.target_id = target_id
        pending_player_ids = []
        for player in players.values():
            if player.id != source_id and not player.lost:
                pending_player_ids.append(player.id)
        self.pending_player_ids = pending_player_ids

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
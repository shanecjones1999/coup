from Deck import influences

class BlockState:
    def __init__(self):
        self.active = False
        self.action_id = None
        self.source_id = None
        self.target_id = None
        self.block_cards = []
        self.pending_player_ids = []
        self.player_ids = []

    def activate_block_state(self, action_id, source_id, players, target_id = None):
        self.active = True
        self.action_id = action_id
        self.source_id = source_id
        self.target_id = target_id
        for influence in influences:
            if influence.block_action_id == action_id:
                self.block_cards.append(influence.to_dict())
        # All players can block foreign aid (make sure they haven't lost)
        if action_id == 2:
            pending_player_ids = []
            for player in players.values():
                if player.id != source_id and not player.lost:
                    pending_player_ids.append(player.id)
            self.pending_player_ids = pending_player_ids
        # Only the target player can block (will be assassinate or steal)
        else:
            if players[target_id].lost:
                raise Exception('Blocked player has already lost')
            self.pending_player_ids = [target_id]

    def reset(self):
        self.active = False
        self.action_id = None
        self.source_id = None
        self.target_id = None
        self.block_cards = []
        self.pending_player_ids = []

    def to_dict(self):
        return { 
                'active': self.active, 
                'actionId': self.action_id,
                'sourceId': self.source_id,
                'targetId': self.target_id,
                'blockCards': self.block_cards,
                'pendingPlayerIds': self.pending_player_ids,
            }
    
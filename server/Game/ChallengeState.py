from server.Game.Deck import influences_dict
from server.Players import Players

class ChallengeState:
    def __init__(self):
        self.active = False
        self.card_claimed = None
        self.action_id = None
        self.source_id = None
        self.source_name = None
        self.target_id = None
        self.target_name = None
        self.from_block = False
        self.pending_player_ids = []

    def activate_challenge_state(self, card_claimed_id, action_id, source_id, from_block, players: Players, target_id = None):
        self.active = True
        self.card_claimed = influences_dict[card_claimed_id]
        self.action_id = action_id
        self.source_id = source_id
        self.source_name = players.get_player(self.source_id).name if self.source_id else None
        self.from_block = from_block
        self.target_id = target_id
        self.target_name = players.get_player(self.target_id).name if self.target_id else None
        pending_player_ids = []
        for player in players.get_players():
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
                'sourceName': self.source_name,
                'targetId': self.target_id,
                'targetName': self.target_name,
                'fromBlock': self.from_block,
                'pendingPlayerIds': self.pending_player_ids,
            }
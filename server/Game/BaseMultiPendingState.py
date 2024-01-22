from server.Game.BaseState import BaseState

class MultiPendingState(BaseState):
    def __init__(self):
        self.pending_player_ids = []

    def remove_pending_player(self, player_id):
        pass

        # TODO: does Python have virtual methods? We ideally call set_messages here but we cannot if virtual methods does not exist.
        
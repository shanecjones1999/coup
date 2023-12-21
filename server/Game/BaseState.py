from server.Players import Players
from server.Game.Action import actions_dict

class BaseState():
    def __init__(self):
        self.active = False
        self.default_message = ''
        self.decision_message = ''

    def activate():
        pass

    def deactivate(self):
        self.active = False
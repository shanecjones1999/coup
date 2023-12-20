from server.Players import Players
from server.Game.Action import actions_dict

class BaseState():
    def __init__(self):
        self.active = False
        self.default_message = ''
        self.decision_message = ''
    
    def set_messages(self, players: Players, source_id, target_id, action_id, pending_player_ids, state):
        if state == 'Block':
            pending_player_names = []
            for player_id in pending_player_ids:
                player_name = players.get_player(player_id).name
                pending_player_names.append(player_name)

            action_name = actions_dict[action_id].name
            source_player_name = players.get_player(source_id).name
            base_message = f'{source_player_name} is attempting to {action_name}.'
            add_message = f'Waiting for {" ".join(pending_player_names)} to block or pass.'

            self.default_message = base_message + ' ' + add_message
            self.decision_message = base_message
        elif state == 'Challenge':
            pass
        elif state == 'ChallengeFromBlock':
            pass
        elif state == 'Exchange':
            pass
        elif state == 'LoseInfluence':
            pass
        elif state == 'RevealCard':
            pass
        else:
            raise Exception('Invalid state passed in:', state)

    def activate():
        pass

    def deactivate(self):
        self.active = False
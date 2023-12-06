class ChatLog:
    def __init__(self):
        self.messages = []

    def add_message(self, name, message):
        msg = {'name': name, 'message': message}
        self.messages.append(msg)
    
    def get_messages(self):
        return self.messages
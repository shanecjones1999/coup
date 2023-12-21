from server.Log import add_log

class CoupException(Exception):
    def __init__(self, message):
        add_log(message)
        super().__init__(message)
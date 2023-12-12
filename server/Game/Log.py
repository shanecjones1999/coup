class Log:
    def __init__(self):
        self.log = []
    
    def add_log(self, msg):
        self.log.append(msg)

    def get_logs(self):
        return self.log
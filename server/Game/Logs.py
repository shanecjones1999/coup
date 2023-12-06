class Logs:
    def __init__(self):
        self.logs = []
    
    def add_log(self, log):
        self.logs.append(log)

    def get_logs(self):
        return self.logs
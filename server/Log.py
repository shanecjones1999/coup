from datetime import datetime

# Class for logging errors/things we don't expect.
class Log:
    def __init__():
        pass

    def add_log(self, log):
        with open('logs.txt', 'a') as file:
            file.write(f'{datetime.now()}: {log}\n')
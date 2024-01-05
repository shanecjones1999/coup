from datetime import datetime

class Log:
    def __init__():
        pass

def add_log(log):
    with open('logs.txt', 'a') as file:
        file.write(f'{datetime.now()}: {log}\n')
from datetime import datetime

# import logging

# # instantiate a logger object writing to connected-apps.log
# logging.basicConfig(
#   format='%(asctime)s,%(msecs)d %(levelname)-8s [%(filename)s:%(lineno)d] %(message)s',
#   datefmt='%Y-%m-%d:%H:%M:%S',
#   level=logging.ERROR,
#   filename='logs/connected_apps.log'
# )    
# # logger object named after module: https://docs.python.org/3/howto/logging.html#advanced-logging-tutorial
# logger = logging.getLogger(__name__)

# Class for logging errors/things we don't expect.
class Log:
    def __init__():
        pass

def add_log(log):
    with open('logs.txt', 'a') as file:
        file.write(f'{datetime.now()}: {log}\n')
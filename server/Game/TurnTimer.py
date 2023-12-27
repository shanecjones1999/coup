import threading
import time

class TurnTimer:
    def __init__(self, seconds, enabled, timer_callback=None):
        self.seconds = seconds
        self.timer_callback = timer_callback
        self.timer_thread = None
        self.enabled = enabled
        self.start_time = None

    def start_timer(self):
        if self.enabled:
            self.start_time = time.time()
            self.timer_thread = threading.Timer(self.seconds, self._timer_function)
            self.timer_thread.start()

    def _timer_function(self):
        if self.timer_callback:
            self.timer_callback()

    def stop(self):
        self.timer_thread.cancel()

    def reset(self):
        self.stop()
        self.start_timer()

    def get_time_left(self):
        if self.enabled and self.start_time:
            elapsed_time = time.time() - self.start_time
            time_left = max(0, self.seconds - elapsed_time)
            return round(time_left)
        return 0


# import threading
# import time

# class TurnTimer:
#     def __init__(self, seconds, enabled, timer_callback=None):
#         self.seconds = seconds
#         self.enabled = enabled
#         self.start_time = None
#         self.timer_thread = None
#         self.turn_complete_event = threading.Event()
#         self.timer_callback = timer_callback

#     def start_timer(self):
#         if self.enabled:
#             self.start_time = time.time()
#             self.timer_thread = threading.Thread(target=self._timer_function)
#             self.timer_thread.start()

#     def _timer_function(self):
#         if self.enabled:
#             time.sleep(self.seconds)
#             self.turn_complete_event.set()
#             if self.timer_callback:
#                 self.timer_callback()

#     def stop_timer(self):
#         self.turn_complete_event.set()  # Set the event to indicate completion

#     def get_time_left(self):
#         if self.start_time is not None:
#             elapsed_time = time.time() - self.start_time
#             time_left = max(0, self.seconds - elapsed_time)
#             return round(time_left)
#         return 0
    
#     def reset(self):
#         self.enabled = True
#         self.turn_complete_event.set()  # Set the event to interrupt the timer
#         self.start_timer()  # Restart the timer

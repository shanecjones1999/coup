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
        if self.enabled:
            self.timer_thread.cancel()

    def reset(self):
        if self.enabled:
            self.stop()
            self.start_timer()

    def get_time_left(self):
        if self.enabled and self.start_time:
            elapsed_time = time.time() - self.start_time
            time_left = max(0, self.seconds - elapsed_time)
            return round(time_left)
        return 0

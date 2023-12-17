class Audit:
    def __init__(self):
        self.audits = []
    
    def add_audit(self, msg):
        self.audits.append(msg)

    def get_audits(self):
        return self.audits
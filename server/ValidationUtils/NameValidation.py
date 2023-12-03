from typing import List

class NameValidation:
    def __init__(self):
        pass

    def is_valid_name(name: str, other_names: list) -> bool:
        if not name:
            return False
        if name in other_names:
            return False
        return True
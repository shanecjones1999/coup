def is_valid_username(username, existing_usernames):
    if not username:
        return False
    if username in existing_usernames:
        return False
    return True
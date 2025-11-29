import requests
import json

def get_id_by_name(name: str) -> int:
    table = requests.get("https://ce.judge0.com/languages/all").json()
    for lang in table:
        if lang["name"] == name:
            return lang["id"], lang["is_archived"]
    return -1, False

def get_name_by_id(id: int) -> str:
    table = requests.get("https://ce.judge0.com/languages/all").json()
    for lang in table:
        if lang["id"] == id:
            return lang["name"], lang["is_archived"]
    return  "err", False

def update_language_table() -> None:
    table = requests.get("https://ce.judge0.com/languages/all").json()
    active_languages = [lang for lang in table if not lang["is_archived"]]
    with open("./judge/languagetable.json", "w") as f:
        json.dump(active_languages, f, indent=4)
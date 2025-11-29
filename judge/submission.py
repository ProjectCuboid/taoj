from dotenv import load_dotenv
import os
import requests
import json

load_dotenv() 

RAPID_API_KEY = os.getenv("RAPID_API_KEY")
API_KEY = RAPID_API_KEY

url = "https://judge0-ce.p.rapidapi.com/submissions?wait=true"


def submit(payload : dict) -> tuple[int, str]:
    headers = {
        "Content-Type": "application/json",
        "X-RapidAPI-Key": API_KEY,
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com"
    }

    res = requests.post(url, data=json.dumps(payload), headers=headers)

    return res.status_code, res.text
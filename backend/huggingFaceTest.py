import requests

# NASA API Data fetching
def fetch_study_data(study_id):
    headers = {
        'Authorization': 'Bearer bTYHcwfSXhfu7jZ9hQFEm4p7avl0LhMWxT8FHWKy',
        'Content-Type': 'application/json'
    }
    response = requests.get(f"https://osdr.nasa.gov/osdr/data/osd/meta/{study_id}", headers=headers)
    return response.json()

# Fetch study data from NASA API
study_id = 379
study_data = fetch_study_data(study_id)
study_text = str(study_data)

# Hugging Face Inference API for Question Answering
api_url = "https://api-inference.huggingface.co/models/distilbert-base-cased-distilled-squad"
headers = {"Authorization": "Bearer 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"}

# List of questions
questions = [
    "How many subjects were in each group?",
    "What treatment was applied to each group?",
    "What happened before the experiment was launched into space?",
    "What events happened after the experiment returned to Earth?",
    "Are there any similar experiments with similar samples?"
]

# Send each question to the Hugging Face API
for question in questions:
    payload = {
        "inputs": {
            "question": question,
            "context": study_text
        }
    }

    response = requests.post(api_url, headers=headers, json=payload)
    if response.status_code == 200:
        answer = response.json()["answer"]
        print(f"Question: {question}")
        print(f"Answer: {answer}\n")
    else:
        print(f"Error: {response.status_code}")

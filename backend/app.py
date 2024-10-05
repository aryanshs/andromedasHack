from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import requests
from data_processing import clean_study_data

app = Flask(__name__)

# Enable CORS for all routes
CORS(app)

NASA_API_URL = "https://osdr.nasa.gov/osdr/data/osd/meta/"

headers = {
    'Authorization' : 'Bearer bTYHcwfSXhfu7jZ9hQFEm4p7avl0LhMWxT8FHWKy',
    'Content-Type' : 'application/json'
}

@app.route('/fetch-study-data', methods=['GET'])
def fetch_study_data():
    try:
        # Get the study ID from the query parameters (e.g., /fetch-study-data?studyId=12345)
        study_id = request.args.get('studyId')

        if not study_id:
            return jsonify({"error": "Study ID is required"}), 400

        # Make the API request to NASA OSDR API
        response = requests.get(f"{NASA_API_URL}{study_id}", headers=headers)

        if response.status_code != 200:
            return jsonify({"error": "Failed to fetch data from NASA API"}), 500

        study_data = response.json()  # Parse the response data
        cleaned_data = clean_study_data(study_data) 
        return jsonify(cleaned_data)  # Return processed data to frontend

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

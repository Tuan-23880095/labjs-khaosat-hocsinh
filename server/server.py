from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from server.database import Session, SurveyResponse
from lib.custom_formatter import format_input
from database import Session, SurveyResponse

import csv
import os

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

DATA_FILE = 'data.csv'
def save_data():
    try:
        data = request.json
        session = Session()
        response = SurveyResponse(**data)
        session.add(response)
        session.commit()
        return jsonify({"status": "success"}), 200
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
@app.route('/')
def index():
    return send_from_directory('.', 'index.html')

@app.route('/api/data', methods=['POST'])
def save_data():
    try:
        data = request.json
        file_exists = os.path.isfile(DATA_FILE)
        
        with open(DATA_FILE, 'a', newline='', encoding='utf-8') as f:
            writer = csv.DictWriter(f, fieldnames=data.keys())
            if not file_exists or os.path.getsize(DATA_FILE) == 0:
                writer.writeheader()
            writer.writerow(data)
            
        return jsonify({'status': 'success'}), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True) 

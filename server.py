from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import csv
import os

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

DATA_FILE = 'data.csv'

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

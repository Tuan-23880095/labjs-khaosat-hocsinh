from flask import request, jsonify
from flask_cors import CORS
from .database import Session, SurveyResponse

def register_routes(app):
    CORS(app)
@app.route("/api/data", methods=["POST"])
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
        finally:
            session.close()  # ✅ đảm bảo đóng session dù có lỗi

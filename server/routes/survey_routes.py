# ==========================
# 3️⃣ Layer: API / Router
# ==========================
# 📁 server/routes/survey_routes.py
from flask import Blueprint, request, jsonify
from server.services.survey_service import SurveyService

survey_bp = Blueprint("survey", __name__)
service = SurveyService()

@survey_bp.route("/api/data", methods=["POST"])
def save_survey():
    data = request.get_json()
    result, status = service.save_response(data)
    return jsonify(result), status


# ==========================
# 2️⃣ Layer: Service Layer
# ==========================
# 📁 server/services/survey_service.py
from server.models.survey_response import SurveyResponse
from server.database import Session

class SurveyService:
    def save_response(self, data):
        session = Session()
        try:
            response = SurveyResponse(**data)
            session.add(response)
            session.commit()
            return {"status": "success"}, 200
        except Exception as e:
            session.rollback()
            return {"status": "error", "message": str(e)}, 500
        finally:
            session.close()



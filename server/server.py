# ==========================
# 📁 server/server.py
# ==========================
from flask import Flask
from flask_cors import CORS
from server.routes.survey_routes import survey_bp

def create_app():
    app = Flask(__name__, static_folder="client")
    CORS(app)
    app.register_blueprint(survey_bp)
    return app


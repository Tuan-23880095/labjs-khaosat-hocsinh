# ==========================
# 1️⃣ Layer: Data / Models
# ==========================
# 📁 server/models/survey_response.py
from sqlalchemy import Column, String, Integer, Text, DateTime
from datetime import datetime
from server.database import Base

class SurveyResponse(Base):
    __tablename__ = "responses"

    id = Column(Integer, primary_key=True)
    ho_ten = Column(String)
    lop = Column(String)
    ma_so = Column(String)
    truong = Column(String)
    khu_vuc = Column(String)
    Q1 = Column(String)
    Q1_duration = Column(Integer)
    Q1_timestamp = Column(DateTime)
    Q2 = Column(String)
    Q2_duration = Column(Integer)
    Q2_timestamp = Column(DateTime)
    Q3 = Column(String)
    Q3_duration = Column(Integer)
    Q3_timestamp = Column(DateTime)
    Q4 = Column(String)
    Q4_explain = Column(Text)
    Q4_duration = Column(Integer)
    Q4_timestamp = Column(DateTime)
    Q5 = Column(String)
    Q5_explain = Column(Text)
    Q5_duration = Column(Integer)
    Q5_timestamp = Column(DateTime)
    Q6 = Column(String)
    Q6_explain = Column(Text)
    Q6_duration = Column(Integer)
    Q6_timestamp = Column(DateTime)
    Q7 = Column(String)
    Q7_explain = Column(Text)
    Q7_duration = Column(Integer)
    Q7_timestamp = Column(DateTime)
    Q8 = Column(String)
    Q8_explain = Column(Text)
    Q8_duration = Column(Integer)
    Q8_timestamp = Column(DateTime)
    ykien = Column(Text)
    timestamp = Column(DateTime, default=datetime.utcnow)


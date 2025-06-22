import os
from sqlalchemy import create_engine, Column, String, Integer, Text, DateTime
from sqlalchemy.ext.declarative import declarative_base
from dotenv import load_dotenv
from sqlalchemy.orm import sessionmaker
from datetime import datetime

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)
Base = declarative_base()
# ✅ Load file .env vào môi trường
load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")
class SurveyResponse(Base):
    __tablename__ = "responses"
    id = Column(Integer, primary_key=True)
    
    # Thông tin cá nhân
    ho_ten = Column(String)
    lop = Column(String)
    ma_so = Column(String)
    truong = Column(String)
    khu_vuc = Column(String)

    # Câu hỏi 1
    Q1 = Column(String)
    Q1_duration = Column(Integer)         # millisec
    Q1_timestamp = Column(DateTime)       # ISO 8601

    # Câu hỏi 2
    Q2 = Column(String)
    Q2_duration = Column(Integer)
    Q2_timestamp = Column(DateTime)

    # Câu hỏi 3
    Q3 = Column(String)
    Q3_duration = Column(Integer)
    Q3_timestamp = Column(DateTime)

    # Câu hỏi 4
    Q4 = Column(String)
    Q4_explain = Column(Text)
    Q4_duration = Column(Integer)
    Q4_timestamp = Column(DateTime)

    # Câu hỏi 5
    Q5 = Column(String)
    Q5_explain = Column(Text)
    Q5_duration = Column(Integer)
    Q5_timestamp = Column(DateTime)

    # Câu hỏi 6
    Q6 = Column(String)
    Q6_explain = Column(Text)
    Q6_duration = Column(Integer)
    Q6_timestamp = Column(DateTime)

    # Câu hỏi 7
    Q7 = Column(String)
    Q7_explain = Column(Text)
    Q7_duration = Column(Integer)
    Q7_timestamp = Column(DateTime)

    # Câu hỏi 8
    Q8 = Column(String)
    Q8_explain = Column(Text)
    Q8_duration = Column(Integer)
    Q8_timestamp = Column(DateTime)

    # Ý kiến cuối
    ykien = Column(Text)

    # Thời điểm nộp toàn bộ khảo sát
    timestamp = Column(DateTime, default=datetime.utcnow)

Base.metadata.create_all(engine)


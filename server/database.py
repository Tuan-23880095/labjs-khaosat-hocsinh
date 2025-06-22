import os
from sqlalchemy import create_engine, Column, String, Integer, Text, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)
Session = sessionmaker(bind=engine)
Base = declarative_base()

class SurveyResponse(Base):
    __tablename__ = "responses"
    id = Column(Integer, primary_key=True)
    ho_ten = Column(String)
    lop = Column(String)
    ma_so = Column(String)
    truong = Column(String)
    khu_vuc = Column(String)
    Q1 = Column(String)
    Q2 = Column(String)
    Q3 = Column(String)
    Q4 = Column(String)
    Q4_explain = Column(Text)
    Q5 = Column(String)
    Q5_explain = Column(Text)
    Q6 = Column(String)
    Q6_explain = Column(Text)
    Q7 = Column(String)
    Q7_explain = Column(Text)
    Q8 = Column(String)
    Q8_explain = Column(Text)
    ykien = Column(Text)
    timestamp = Column(DateTime, default=datetime.datetime.utcnow)

Base.metadata.create_all(engine)


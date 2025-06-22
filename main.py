from flask import Flask, send_from_directory
from server.server import register_routes
import os

app = Flask(__name__, static_folder="client")
register_routes(app)  # đăng ký các API route từ server.py

# Trả về index.html khi truy cập /
@app.route("/")
def serve_index():
    return send_from_directory(app.static_folder, "index.html")

# Phục vụ các file tĩnh (js, css, png...) từ /client
@app.route("/<path:path>")
def serve_static_files(path):
    return send_from_directory(app.static_folder, path)

# Chạy app
if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8080))
    app.run(host="0.0.0.0", port=port)

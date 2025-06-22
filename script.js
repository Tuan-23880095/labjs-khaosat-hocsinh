const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    { "type": "lab.plugins.Metadata" },
    { "type": "lab.plugins.Download", "filePrefix": "khaosat-hocsinh" }
  ],
  "metadata": {
    "title": "Khảo sát Nhanh trí Sáng mắt",
    "description": "Đo tốc độ và tư duy nhận biết hình, logic, chuỗi số của học sinh THPT Việt Nam.",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    // 1. THÔNG TIN CÁ NHÂN
    {
      "type": "lab.html.Form",
      "title": "Thông tin học sinh",
      "parameters": {},
      "metadata": {},
      "scrollTop": true,
      "content": `
<form>
  <h3>Thông tin học sinh</h3>
  <label for="ho_ten">Họ tên (viết tắt, VD: N.V.A):</label><br>
  <input type="text" name="ho_ten" id="ho_ten" pattern="^([A-Z]\\.){1,}[A-Z]$" placeholder="N.V.A" required><br><br>

  <label for="lop">Lớp:</label><br>
  <select name="lop" id="lop" required>
    <option value="" disabled selected>-- Chọn lớp --</option>
    <option value="10">10</option>
    <option value="11">11</option>
    <option value="12">12</option>
  </select><br><br>

  <label for="ma_so">Mã số (do HS tự đặt, VD: AB83):</label><br>
  <input type="text" name="ma_so" id="ma_so" pattern="[A-Za-z]{2}[0-9]{2}" required><br><br>

  <label for="truong">Trường THPT:</label><br>
  <input type="text" name="truong" id="truong" required><br><br>

  <label for="khu_vuc">Khu vực:</label><br>
  <select name="khu_vuc" id="khu_vuc" required>
    <option value="" disabled selected>-- Chọn khu vực --</option>
    <option value="Bắc">Bắc</option>
    <option value="Trung">Trung</option>
    <option value="Tây Nam Bộ">Tây Nam Bộ</option>
    <option value="Tây Nguyên">Tây Nguyên</option>
    <option value="Miền núi phía Bắc">Miền núi phía Bắc</option>
  </select><br><br>
  <button type="submit">Bắt đầu khảo sát</button>
</form>
<hr>
<p><small>Xin cảm ơn bạn đã tham gia khảo sát!<br>
Kết quả sẽ gửi lại cho bạn (theo mã số) để biết mình đạt bao nhiêu % nhanh mắt, sáng trí.<br>
Nhóm nghiên cứu, Khoa Toán-Tin, ĐH Khoa học Tự nhiên - ĐHQG TPHCM.</small></p>
      `
    },

    // 2. GIỚI THIỆU & VÍ DỤ
    {
      "type": "lab.html.Form",
      "title": "Ví dụ",
      "parameters": {},
      "metadata": {},
      "scrollTop": true,
      "content": `
<form>
  <h3>Ví dụ minh họa</h3>
  <p><strong>Ví dụ:</strong> Trong bài kiểm tra <em>Phân tích hình ảnh / Figure Analysis</em>, mỗi câu hỏi đưa ra một hình vuông được gấp lại nhiều lần theo chiều của mũi tên và sau đó được đục một hoặc nhiều lỗ xuyên qua. Học sinh phải tính toán sản phẩm cuối cùng sẽ trông như thế nào khi mở ra và chọn từ năm đáp án được cung cấp.</p>
  <p>Ví dụ ở trên: Khi gấp giấy góc chéo hình vuông, sau đó gấp góc lại thành hình thang như hình rồi đục 3 lỗ như hình. Sau khi mở lại trang giấy ta có hình C.</p>
  <img src="https://i.imgur.com/8O0z566.png" alt="Ví dụ" width="50%">
  <button type="submit">Tiếp tục</button>
</form>
      `
    },

    // 3. CÂU HÌNH 1
    {
      "type": "lab.html.Form",
      "title": "Câu 1",
      "parameters": {},
      "metadata": {},
      "scrollTop": true,
      "content": `
<form>
  <h3>Câu 1</h3>
  <img src="https://i.imgur.com/7GYWiaK.png" alt="Hình 1" width="50%">
  <p><strong>Hãy chọn số phù hợp với hình trên:</strong></p>
  <label><input type="radio" name="Q1" value="1" required> A. 1</label><br>
  <label><input type="radio" name="Q1" value="2"> B. 2</label><br>
  <label><input type="radio" name="Q1" value="3"> C. 3</label><br>
  <label><input type="radio" name="Q1" value="4"> D. 4</label><br>
  <label><input type="radio" name="Q1" value="5"> E. 5</label><br><br>
  <label>Em mất bao nhiêu thời gian để tìm ra đáp án cho hình này (giây):</label>
  <input type="number" name="Q1_time" min="0" max="600" required><br><br>
  <button type="submit">Tiếp tục</button>
</form>
      `
    },

    // 4. CÂU HÌNH 2
    {
      "type": "lab.html.Form",
      "title": "Câu 2",
      "parameters": {},
      "metadata": {},
      "scrollTop": true,
      "content": `
<form>
  <h3>Câu 2</h3>
  <img src="https://i.imgur.com/ULNoaIC.png" alt="Hình 2" width="50%">
  <p><strong>Hãy chọn số phù hợp với hình trên:</strong></p>
  <label><input type="radio" name="Q2" value="1" required> A. 1</label><br>
  <label><input type="radio" name="Q2" value="2"> B. 2</label><br>
  <label><input type="radio" name="Q2" value="3"> C. 3</label><br>
  <label><input type="radio" name="Q2" value="4"> D. 4</label><br>
  <label><input type="radio" name="Q2" value="5"> E. 5</label><br><br>
  <label>Em mất bao nhiêu thời gian để tìm ra đáp án cho hình này (giây):</label>
  <input type="number" name="Q2_time" min="0" max="600" required><br><br>
  <button type="submit">Tiếp tục</button>
</form>
      `
    },

    // 5. CÂU HÌNH 3
    {
      "type": "lab.html.Form",
      "title": "Câu 3",
      "parameters": {},
      "metadata": {},
      "scrollTop": true,
      "content": `
<form>
  <h3>Câu 3</h3>
  <img src="https://i.imgur.com/KIvDdrY.png" alt="Hình 3" width="50%">
  <p><strong>Hãy chọn số phù hợp với hình trên:</strong></p>
  <label><input type="radio" name="Q3" value="1" required> A. 1</label><br>
  <label><input type="radio" name="Q3" value="2"> B. 2</label><br>
  <label><input type="radio" name="Q3" value="3"> C. 3</label><br>
  <label><input type="radio" name="Q3" value="4"> D. 4</label><br>
  <label><input type="radio" name="Q3" value="5"> E. 5</label><br><br>
  <label>Em mất bao nhiêu thời gian để tìm ra đáp án cho hình này (giây):</label>
  <input type="number" name="Q3_time" min="0" max="600" required><br><br>
  <button type="submit">Tiếp tục</button>
</form>
      `
    },

    // 6. CÂU DÃY SỐ LOGIC
    {
      "type": "lab.html.Form",
      "title": "Câu 4: Quy luật dãy số",
      "parameters": {},
      "metadata": {},
      "scrollTop": true,
      "content": `
<form>
  <h3>Câu 4: Quy luật dãy số</h3>
  <p>Cho dãy số 50, 47, 44, 49, 46, 43, 48, 45, ... Số hạng tiếp theo của dãy số là số nào?</p>
  <label><input type="radio" name="Q4" value="12" required> A. 12</label><br>
  <label><input type="radio" name="Q4" value="6"> B. 6</label><br>
  <label><input type="radio" name="Q4" value="8"> C. 8</label><br>
  <label><input type="radio" name="Q4" value="24"> D. 24</label><br>
  <label><input type="radio" name="Q4" value="48"> E. 48</label><br><br>
  <label>Giải thích tại sao bạn chọn đáp án đó:</label><br>
  <textarea name="Q4_explain" rows="3" cols="60" placeholder="Nêu lý do chọn đáp án..."></textarea><br><br>
  <button type="submit">Tiếp tục</button>
</form>
      `
    },

    // 7. CÂU HÌNH KHỐI - chọn thiết kế
    {
      "type": "lab.html.Form",
      "title": "Câu 5: Thiết kế hình",
      "parameters": {},
      "metadata": {},
      "scrollTop": true,
      "content": `
<form>
  <h3>Câu 5: Thiết kế hình</h3>
  <img src="https://i.imgur.com/dRZNboi.png" alt="Hình 5" width="50%">
  <p><strong>Hãy chọn số phù hợp với hình trên:</strong></p>
  <label><input type="radio" name="Q5" value="1" required> A. 1</label><br>
  <label><input type="radio" name="Q5" value="2"> B. 2</label><br>
  <label><input type="radio" name="Q5" value="3"> C. 3</label><br>
  <label><input type="radio" name="Q5" value="4"> D. 4</label><br>
  <label><input type="radio" name="Q5" value="5"> E. 5</label><br><br>
  <label>Giải thích tại sao bạn chọn đáp án đó:</label><br>
  <textarea name="Q5_explain" rows="3" cols="60" placeholder="Nêu lý do chọn đáp án..."></textarea><br><br>
  <button type="submit">Tiếp tục</button>
</form>
      `
    },

    // 8. Ý KIẾN GÓP Ý
    {
      "type": "lab.html.Form",
      "title": "Ý kiến đóng góp",
      "parameters": {},
      "metadata": {},
      "scrollTop": true,
      "content": `
<form>
  <h3>Ý kiến đóng góp</h3>
  <label>Bạn có nhận xét/góp ý gì về bài khảo sát này không?</label><br>
  <textarea name="ykien" rows="3" cols="60" placeholder="Ghi nhận xét nếu có..."></textarea><br>
  <p style="font-style:italic; color:green;">🎉 Cảm ơn bạn đã hoàn thành khảo sát! Kết quả của bạn đã được ghi nhận.</p>
  <button type="submit">Kết thúc</button>
</form>
      `
    },

    // 9. KẾT THÚC
    {
      "type": "lab.flow.End",
      "title": "Kết thúc",
      "parameters": {},
      "metadata": {},
      "message": "Cảm ơn bạn đã tham gia khảo sát! Chúc bạn học tốt và nhiều thành công!"
    }
  ]
});

// Bắt đầu khảo sát
study.run();

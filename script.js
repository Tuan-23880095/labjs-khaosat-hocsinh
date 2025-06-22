const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Transmit",
      "url": "/api/data",
      "metadata": {
        "device": {
          "type": "object",
          "properties": {
            "userAgent": { "type": "string" },
            "screen": {
              "type": "object",
              "properties": {
                "width": { "type": "number" },
                "height": { "type": "number" }
              }
            }
          }
        }
      }
    }
  ],
  "metadata": {
    "title": "Khảo sát Nhanh trí Sáng mắt",
    "description": "Đo tốc độ và tư duy nhận biết hình, logic, chuỗi số của học sinh THPT Việt Nam.",
    "repository": "",
    "contributors": "Dựa trên thiết kế ban đầu của người dùng."
  },
  "files": {},
  "responses": {},
  "content": [
    // 1. THÔNG TIN CÁ NHÂN
    {
      "type": "lab.html.Form",
      "title": "Thông tin học sinh",
      "content": `
        <div class="container">
          <form>
            <h3>Thông tin học sinh</h3>
            <label for="ho_ten">Họ tên (viết tắt, VD: N.V.A):</label>
            <input type="text" name="ho_ten" id="ho_ten" pattern="^([A-ZÀ-Ỹ]\\.){1,}[A-ZÀ-Ỹ]$" placeholder="N.V.A" required>
            <label for="lop">Lớp:</label>
            <select name="lop" id="lop" required>
              <option value="" disabled selected>-- Chọn lớp --</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <label for="ma_so">Mã số (tự đặt, VD: AB83):</label>
            <input type="text" name="ma_so" id="ma_so" pattern="[A-Za-z]{2}[0-9]{2}" placeholder="AB12" required>
            <label for="truong">Trường THPT:</label>
            <input type="text" name="truong" id="truong" required>
            <label for="khu_vuc">Khu vực:</label>
            <select name="khu_vuc" id="khu_vuc" required>
              <option value="" disabled selected>-- Chọn khu vực --</option>
              <option value="Đồng bằng sông Hồng">Đồng bằng sông Hồng</option>
              <option value="Đông Bắc Bộ">Đông Bắc Bộ</option>
              <option value="Tây Bắc Bộ">Tây Bắc Bộ</option>
              <option value="Bắc Trung Bộ">Bắc Trung Bộ</option>
              <option value="Nam Trung Bộ">Nam Trung Bộ</option>
              <option value="Tây Nguyên">Tây Nguyên</option>
              <option value="Đông Nam Bộ">Đông Nam Bộ</option>
              <option value="Tây Nam Bộ">Tây Nam Bộ</option>
            </select>
            <button type="submit">Bắt đầu khảo sát</button>
          </form>
          <hr>
          <p><small>Xin cảm ơn bạn đã tham gia khảo sát!<br>
          Kết quả sẽ gửi lại cho bạn (theo mã số) để biết mình đạt bao nhiêu % nhanh mắt, sáng trí.<br>
          Nhóm nghiên cứu, Khoa Toán-Tin, ĐH Khoa học Tự nhiên - ĐHQG TPHCM.</small></p>
        </div>
      `,
      "scrollTop": true
    },
    // 2. GIỚI THIỆU & VÍ DỤ
    {
      "type": "lab.html.Form",
      "title": "Ví dụ",
      "content": `
        <div class="container">
          <form>
            <h3>Ví dụ minh họa</h3>
            <p><strong>Ví dụ:</strong> Trong bài kiểm tra <em>Phân tích hình ảnh / Figure Analysis</em>, mỗi câu hỏi đưa ra một hình vuông được gấp lại nhiều lần theo chiều của mũi tên và sau đó được đục một hoặc nhiều lỗ xuyên qua. Học sinh phải tính toán sản phẩm cuối cùng sẽ trông như thế nào khi mở ra và chọn từ năm đáp án được cung cấp.</p>
            <p>Ví dụ ở trên: Khi gấp giấy góc chéo hình vuông, sau đó gấp góc lại thành hình thang như hình rồi đục 3 lỗ như hình. Sau khi mở lại trang giấy ta có hình C.</p>
            <img src="static/images/vd.png" alt="Ví dụ">
            <button type="submit">Tiếp tục</button>
          </form>
        </div>
      `,
      "scrollTop": true
    },
    // 3. CÂU HÌNH 1
    {
      "type": "lab.html.Form",
      "title": "Câu 1",
      "content": `
        <div class="container">
          <form>
            <h3>Câu 1</h3>
            <img src="static/images/cau1.png" alt="Hình 1">
            <p><strong>Hãy chọn số phù hợp với hình trên:</strong></p>
            <label><input type="radio" name="Q1" value="1" required> A. 1</label>
            <label><input type="radio" name="Q1" value="2"> B. 2</label>
            <label><input type="radio" name="Q1" value="3"> C. 3</label>
            <label><input type="radio" name="Q1" value="4"> D. 4</label>
            <label><input type="radio" name="Q1" value="5"> E. 5</label>
            <label for="Q1_time">Em mất bao nhiêu thời gian để tìm ra đáp án cho hình này (giây):</label>
            <input type="number" name="Q1_time" id="Q1_time" min="0" max="600" required>
            <button type="submit">Tiếp tục</button>
          </form>
        </div>
      `,
      "scrollTop": true
    },
    // 4. CÂU HÌNH 2
    {
      "type": "lab.html.Form",
      "title": "Câu 2",
      "content": `
        <div class="container">
          <form>
            <h3>Câu 2</h3>
            <img src="static/images/cau2.png" alt="Hình 2">
            <p><strong>Hãy chọn số phù hợp với hình trên:</strong></p>
            <label><input type="radio" name="Q2" value="1" required> A. 1</label>
            <label><input type="radio" name="Q2" value="2"> B. 2</label>
            <label><input type="radio" name="Q2" value="3"> C. 3</label>
            <label><input type="radio" name="Q2" value="4"> D. 4</label>
            <label><input type="radio" name="Q2" value="5"> E. 5</label>
            <label for="Q2_time">Em mất bao nhiêu thời gian để tìm ra đáp án cho hình này (giây):</label>
            <input type="number" name="Q2_time" id="Q2_time" min="0" max="600" required>
            <button type="submit">Tiếp tục</button>
          </form>
        </div>
      `,
      "scrollTop": true
    },
    // 5. CÂU HÌNH 3
    {
      "type": "lab.html.Form",
      "title": "Câu 3",
      "content": `
        <div class="container">
          <form>
            <h3>Câu 3</h3>
            <img src="static/images/cau3.png" alt="Hình 3">
            <p><strong>Hãy chọn số phù hợp với hình trên:</strong></p>
            <label><input type="radio" name="Q3" value="1" required> A. 1</label>
            <label><input type="radio" name="Q3" value="2"> B. 2</label>
            <label><input type="radio" name="Q3" value="3"> C. 3</label>
            <label><input type="radio" name="Q3" value="4"> D. 4</label>
            <label><input type="radio" name="Q3" value="5"> E. 5</label>
            <label for="Q3_time">Em mất bao nhiêu thời gian để tìm ra đáp án cho hình này (giây):</label>
            <input type="number" name="Q3_time" id="Q3_time" min="0" max="600" required>
            <button type="submit">Tiếp tục</button>
          </form>
        </div>
      `,
      "scrollTop": true
    },
    // 6. CÂU DÃY SỐ LOGIC
    {
      "type": "lab.html.Form",
      "title": "Câu 4: Quy luật dãy số",
      "content": `
        <div class="container">
          <form>
            <h3>Câu 4: Quy luật dãy số</h3>
            <p>Cho dãy số 50, 47, 44, 49, 46, 43, 48, 45, ... Số hạng tiếp theo của dãy số là số nào?</p>
            <label><input type="radio" name="Q4" value="42"> A. 42</label>
            <label><input type="radio" name="Q4" value="41"> B. 41</label>
            <label><input type="radio" name="Q4" value="40"> C. 40</label>
            <label><input type="radio" name="Q4" value="39"> D. 39</label>
            <label><input type="radio" name="Q4" value="khac"> E. Khác</label>
            <label for="Q4_explain">Giải thích tại sao bạn chọn đáp án đó:</label>
            <textarea name="Q4_explain" id="Q4_explain" rows="3" cols="60" placeholder="Nêu lý do chọn đáp án..."></textarea>
            <button type="submit">Tiếp tục</button>
          </form>
        </div>
      `,
      "scrollTop": true
    },
    // 7. CÂU HÌNH KHỐI - chọn thiết kế
    {
      "type": "lab.html.Form",
      "title": "Câu 5: Thiết kế hình -Hãy tìm thiết kế nào trong năm thiết kế có cùng kích thước với hình phác bên dưới ",
      "content": `
        <div class="container">
          <form>
            <h3>Câu 5: Thiết kế hình</h3>
            <img src="static/images/cau5.png" alt="Hình 5">
            <p><strong>Hãy chọn số phù hợp với hình trên:</strong></p>
            <label><input type="radio" name="Q5" value="1" required> A. 1</label>
            <label><input type="radio" name="Q5" value="2"> B. 2</label>
            <label><input type="radio" name="Q5" value="3"> C. 3</label>
            <label><input type="radio" name="Q5" value="4"> D. 4</label>
            <label><input type="radio" name="Q5" value="5"> E. 5</label>
            <label for="Q5_explain">Giải thích tại sao bạn chọn đáp án đó:</label>
            <textarea name="Q5_explain" id="Q5_explain" rows="3" cols="60" placeholder="Nêu lý do chọn đáp án..."></textarea>
            <button type="submit">Tiếp tục</button>
          </form>
        </div>
      `,
      "scrollTop": true
    },
    {
      "type": "lab.html.Form",
      "title": "Câu 6: Thiết kế hình -Hãy tìm thiết kế nào trong năm thiết kế có cùng kích thước với hình phác bên dưới ",
      "content": `
        <div class="container">
          <form>
            <h3>Câu 6: Thiết kế hình</h3>
            <img src="static/images/cau6.png" alt="Hình 6">
            <p><strong>Hãy chọn số phù hợp với hình trên:</strong></p>
            <label><input type="radio" name="Q6" value="1" required> A. 1</label>
            <label><input type="radio" name="Q6" value="2"> B. 2</label>
            <label><input type="radio" name="Q6" value="3"> C. 3</label>
            <label><input type="radio" name="Q6" value="4"> D. 4</label>
            <label><input type="radio" name="Q6" value="5"> E. 5</label>
            <label for="Q6_explain">Giải thích tại sao bạn chọn đáp án đó:</label>
            <textarea name="Q6_explain" id="Q6_explain" rows="3" cols="60" placeholder="Nêu lý do chọn đáp án..."></textarea>
            <button type="submit">Tiếp tục</button>
          </form>
        </div>
      `,
      "scrollTop": true
    },
    {
      "type": "lab.html.Form",
      "title": "Câu 7: Thiết kế hình -Hãy tìm thiết kế nào trong năm thiết kế có cùng kích thước với hình phác bên dưới ",
      "content": `
        <div class="container">
          <form>
            <h3>Câu 7: Thiết kế hình</h3>
            <img src="static/images/cau7.png" alt="Hình 7">
            <p><strong>Hãy chọn số phù hợp với hình trên:</strong></p>
            <label><input type="radio" name="Q7" value="1" required> A. 1</label>
            <label><input type="radio" name="Q7" value="2"> B. 2</label>
            <label><input type="radio" name="Q7" value="3"> C. 3</label>
            <label><input type="radio" name="Q7" value="4"> D. 4</label>
            <label><input type="radio" name="Q7" value="5"> E. 5</label>
            <label for="Q7_explain">Giải thích tại sao bạn chọn đáp án đó:</label>
            <textarea name="Q7_explain" id="Q7_explain" rows="3" cols="60" placeholder="Nêu lý do chọn đáp án..."></textarea>
            <button type="submit">Tiếp tục</button>
          </form>
        </div>
      `,
      "scrollTop": true
    },
    {
      "type": "lab.html.Form",
      "title": "Câu 8: Thiết kế hình -Hãy tìm thiết kế nào trong năm thiết kế có cùng kích thước với hình phác bên dưới ",
      "content": `
        <div class="container">
          <form>
            <h3>Câu 8: Thiết kế hình</h3>
            <img src="static/images/cau8.png" alt="Hình 8">
            <p><strong>Hãy chọn số phù hợp với hình trên:</strong></p>
            <label><input type="radio" name="Q8" value="1" required> A. 1</label>
            <label><input type="radio" name="Q8" value="2"> B. 2</label>
            <label><input type="radio" name="Q8" value="3"> C. 3</label>
            <label><input type="radio" name="Q8" value="4"> D. 4</label>
            <label><input type="radio" name="Q8" value="5"> E. 5</label>
            <label for="Q8_explain">Giải thích tại sao bạn chọn đáp án đó:</label>
            <textarea name="Q8_explain" id="Q8_explain" rows="3" cols="60" placeholder="Nêu lý do chọn đáp án..."></textarea>
            <button type="submit">Tiếp tục</button>
          </form>
        </div>
      `,
      "scrollTop": true
    },
    // 8. Ý KIẾN GÓP Ý
    {
      "type": "lab.html.Form",
      "title": "Ý kiến đóng góp",
      "content": `
        <div class="container">
          <form>
            <h3>Ý kiến đóng góp</h3>
            <label for="ykien">Bạn có nhận xét/góp ý gì về bài khảo sát này không?</label>
            <textarea name="ykien" id="ykien" rows="3" cols="60" placeholder="Ghi nhận xét nếu có..."></textarea>
            <p style="font-style:italic; color:green;">🎉 Cảm ơn bạn đã hoàn thành khảo sát! Kết quả của bạn đã được ghi nhận.</p>
            <button type="submit">Kết thúc</button>
          </form>
        </div>
      `,
      "scrollTop": true,
      "timeout": 0
    },
    // 9. KẾT THÚC
    {
      "type": "lab.html.Screen",
      "title": "Kết thúc",
      "content": `
        <div class="container">
          <h2>Cảm ơn bạn đã tham gia!</h2>
          <p>Dữ liệu của bạn đã được gửi đi thành công. Chúc bạn một ngày tốt lành!</p>
        </div>
      `,
      "timeout": 3000
    }
  ]
});

// Bắt đầu khảo sát
study.run();

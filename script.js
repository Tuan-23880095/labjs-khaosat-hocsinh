// Define study
const study = lab.util.fromObject({
  "title": "root",
  "type": "lab.flow.Sequence",
  "parameters": {},
  "plugins": [
    {
      "type": "lab.plugins.Metadata",
      "path": undefined
    },
    {
      "type": "lab.plugins.Download",
      "filePrefix": "cognitive-pattern-analysis-in-vietnamese-high-school-students",
      "path": undefined
    }
  ],
  "metadata": {
    "title": "Cognitive Pattern Analysis in Vietnamese High School Students",
    "description": "This study investigates high school students’ cognitive strategies through a set of problem-solving tasks including figure analysis, numerical reasoning, spatial design, and logic-based multiple-choice questions. Participants' response time and answer justifications are also recorded to evaluate decision-making behavior.",
    "repository": "",
    "contributors": ""
  },
  "files": {},
  "responses": {},
  "content": [
    {
      "type": "lab.flow.Sequence",
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Sequence",
      "content": [
        {
          "type": "lab.html.Form",
          "content": "\u003Cform\u003E\n  \u003Ch3\u003EThông tin học sinh\u003C\u002Fh3\u003E\n\n  \u003Clabel for=\"ho_ten\"\u003EHọ và tên:\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Cinput type=\"text\" name=\"ho_ten\" id=\"ho_ten\" required\u003E\u003Cbr\u003E\u003Cbr\u003E\n\n  \u003Clabel for=\"truong\"\u003ETrường học:\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Cinput type=\"text\" name=\"truong\" id=\"truong\" required\u003E\u003Cbr\u003E\u003Cbr\u003E\n\n  \u003Clabel for=\"lop\"\u003ELớp:\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Cinput type=\"text\" name=\"lop\" id=\"lop\" required\u003E\u003Cbr\u003E\u003Cbr\u003E\n\n  \u003Clabel for=\"diem_toan\"\u003EBạn đánh giá mức độ học môn Toán của mình ở mức nào?\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Cselect name=\"diem_toan\" id=\"diem_toan\" required\u003E\n    \u003Coption value=\"\" disabled selected\u003E-- Chọn một mức --\u003C\u002Foption\u003E\n    \u003Coption value=\"kha\"\u003EKhá\u003C\u002Foption\u003E\n    \u003Coption value=\"kha_gioi\"\u003EKhá giỏi\u003C\u002Foption\u003E\n    \u003Coption value=\"gioi\"\u003EGiỏi\u003C\u002Foption\u003E\n    \u003Coption value=\"xuat_sac\"\u003EXuất sắc\u003C\u002Foption\u003E\n  \u003C\u002Fselect\u003E\u003Cbr\u003E\u003Cbr\u003E\n\n  \u003Cbutton type=\"submit\"\u003EBắt đầu làm khảo sát\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E\n\n\u003Chr\u003E\n\n\u003Ch4\u003E🧪 Nhóm nghiên cứu\u003C\u002Fh4\u003E\n\u003Cp\u003ENhóm Nghiên cứu Khoa học – Giáo dục học\u003C\u002Fp\u003E\n\u003Cp\u003EKhoa Toán – Tin học, Trường Đại học Khoa học Tự nhiên, Đại học Quốc gia TP.HCM (HCMUS – VNU-HCM)\u003C\u002Fp\u003E\n\u003Cp\u003ELiên hệ: \u003Ca href=\"mailto:ththao@hcmus.edu.vn\"\u003Eththao@hcmus.edu.vn \u003C\u002Fa\u003E\u003C\u002Fp\u003E\n",
          "scrollTop": true,
          "files": {},
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Form"
        },
        {
          "type": "lab.html.Form",
          "content": "\u003Cform\u003E\n  \u003Ch3\u003EPhần 1: (5 phút)\u003C\u002Fh3\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EVí dụ:\u003C\u002Fstrong\u003E Trong bài kiểm tra \u003Cem\u003EPhân tích hình ảnh \u002F Figure Analysis\u003C\u002Fem\u003E, mỗi câu hỏi đưa ra một hình vuông được gấp lại nhiều lần theo chiều của mũi tên và sau đó được đục một hoặc nhiều lỗ xuyên qua.\u003C\u002Fp\u003E\n\n\u003Cp\u003EHọc sinh phải tính toán sản phẩm cuối cùng sẽ trông như thế nào khi mở ra và chọn từ năm đáp án được cung cấp.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EVí dụ như hình sau:\u003C\u002Fstrong\u003E Khi gấp giấy góc chéo hình vuông, sau đó gấp góc lại thành hình thang như hình rồi đục 3 lỗ như hình. Sau khi mở lại trang giấy ta có hình C.\u003C\u002Fp\u003E\n\n\u003Cp\u003E\n  \u003Cimg src=\"https:\u002F\u002Fi.imgur.com\u002F8O0z566.png\" alt=\"Hình minh họa\" width=\"50%\"\u003E\n\u003C\u002Fp\u003E\n  \u003Cbutton type=\"submit\"\u003ETiếp tục\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E",
          "scrollTop": true,
          "files": {
            "phan5c.png": "embedded\u002Fb660ca6ad8a0418ab0a3a43712c93c3673af04dc0883e5a2671c4420de2501fc.png",
            "phan5b.png": "embedded\u002F283f64d0516bc74824d88f49696aedf105c5893e793f99671a73727363d2bc48.png",
            "phan5a.png": "embedded\u002Fe3dcc5010692ff0d754279ac5b66fea408746b334b798fa1ef6f83ba458a2a79.png",
            "phan3.png": "embedded\u002Fbf71e9381c3742ecbc84224c6abd754cb0f35852190403c404dc24ce60624cfc.png",
            "cau3.png": "embedded\u002F8484994df97a44e7b4b870e00d593b434e493d2c17fd20ce02fab6ce282df3ae.png",
            "cau2.png": "embedded\u002Ff2cc0c8ed34b5b01fdf0b5c289a667eb22ff7bfda002576891b0b8d0cf5fd256.png",
            "cau1.png": "embedded\u002F6bf495b725630acd6f1bcf344718d4353378712d3182aca97db0937f40060e52.png",
            "mau.png": "embedded\u002Ff911d0fe169282888dbff4b2782187b0391a5b072879ef533752300c2215f12b.png"
          },
          "responses": {
            "": ""
          },
          "parameters": {},
          "messageHandlers": {},
          "title": "Form"
        }
      ]
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cform\u003E\n\u003Cp\u003E\n  \u003Cimg src=\"https:\u002F\u002Fi.imgur.com\u002F7GYWiaK.png\" alt=\"Hình minh họa\" width=\"50%\"\u003E\n\u003C\u002Fp\u003E\n\n\n  \u003Cp\u003E\u003Cstrong\u003EHãy chọn số phù hợp với hình trên :\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q1\" value=\"1\" required\u003E A. 1\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q1\" value=\"2\"\u003E B. 2\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q1\" value=\"3\"\u003E C. 3\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q1\" value=\"4\"\u003E D. 4\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q1\" value=\"5\"\u003E E. 5\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\n    \u003Cbutton type=\"submit\"\u003ETiếp tục\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Form"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cform\u003E\n\u003Cp\u003E\n  \u003Cimg src=\"https:\u002F\u002Fi.imgur.com\u002FULNoaIC.png\" alt=\"Hình minh họa\" width=\"50%\"\u003E\n\u003C\u002Fp\u003E\n\n\n  \u003Cp\u003E\u003Cstrong\u003EHãy chọn số phù hợp với hình trên :\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q2\" value=\"1\" required\u003E A. 1\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q2\" value=\"2\"\u003E B. 2\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q2\" value=\"3\"\u003E C. 3\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q2\" value=\"4\"\u003E D. 4\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q2\" value=\"5\"\u003E E. 5\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\n    \u003Cbutton type=\"submit\"\u003ETiếp tục\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Form"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cform\u003E\n\u003Cp\u003E\n  \u003Cimg src=\"https:\u002F\u002Fi.imgur.com\u002FKIvDdrY.png\" alt=\"Hình minh họa\" width=\"50%\"\u003E\n\u003C\u002Fp\u003E\n\n\n  \u003Cp\u003E\u003Cstrong\u003EHãy chọn số phù hợp với hình trên :\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q3\" value=\"1\" required\u003E A. 1\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q3\" value=\"2\"\u003E B. 2\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q3\" value=\"3\"\u003E C. 3\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q3\" value=\"4\"\u003E D. 4\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q3\" value=\"5\"\u003E E. 5\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\n    \u003Cbutton type=\"submit\"\u003ETiếp tục\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Form"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cform\u003E\n \u003Ch3\u003EPhần 2:\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cstrong\u003EHãy tìm ra quy luật của dãy số và chọn ra số tiếp theo trong dãy từ những đáp án đề bài đưa ra. \u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n  \u003Cp\u003ECho dãy số  50, 47, 44, 49, 46, 43, 48, 45, …  Số hạng tiếp theo của dãy số là số nào?\u003C\u002Fp\u003E\n\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q4\" value=\"42\" required\u003E A. 42\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q4\" value=\"6\"\u003E B. 6\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q4\" value=\"8\"\u003E C. 8\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q4\" value=\"24\"\u003E D. 24\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q4\" value=\"48\"\u003E E. 48\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\n\n\u003Clabel for=\"Q4_expl\"\u003E\u003Cstrong\u003ESau đó giải thích tại sao bạn chọn đáp án đó:\u003C\u002Fstrong\u003E\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Ctextarea name=\"Q4_expl\" rows=\"4\" cols=\"60\" placeholder=\"Viết lý do của bạn tại đây...\"\u003E\u003C\u002Ftextarea\u003E\u003Cbr\u003E\u003Cbr\u003E\n\n    \u003Cbutton type=\"submit\"\u003ETiếp tục\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Form"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cform\u003E\n \u003Ch3\u003EPhần 3(5 phút):\u003C\u002Fh3\u003E\n\u003Cp\u003E\u003Cstrong\u003EHãy thiết kế nào trong năm thiết kế có cùng kích thước với hình phác bên trên: \u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\u003Cp\u003E\n  \u003Cimg src=\"https:\u002F\u002Fi.imgur.com\u002FdRZNboi.png\" alt=\"Hình minh họa\" width=\"50%\"\u003E\n\u003C\u002Fp\u003E\n\n  \u003Cp\u003E\u003Cstrong\u003EHãy chọn số phù hợp với hình trên :\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q5\" value=\"1\" required\u003E A. 1\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q5\" value=\"2\"\u003E B. 2\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q5\" value=\"3\"\u003E C. 3\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q5\" value=\"4\"\u003E D. 4\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q5\" value=\"5\"\u003E E. 5\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\n\n\n    \u003Cbutton type=\"submit\"\u003ETiếp tục\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Form"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cform\u003E\n \u003Ch3\u003EPhần 5a :\u003C\u002Fh3\u003E\n \n\u003Cp\u003E\n  \u003Cimg src=\"https:\u002F\u002Fi.imgur.com\u002FGW3LjiZ.png\" alt=\"Hình minh họa\" width=\"50%\"\u003E\n\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EHãy chọn một trong các hình từ 1 đến 5, phù hợp với vị trí còn trống của hình phác bên trên: \u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q6\" value=\"1\" required\u003E A. 1\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q6\" value=\"2\"\u003E B. 2\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q6\" value=\"3\"\u003E C. 3\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q6\" value=\"4\"\u003E D. 4\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q6\" value=\"5\"\u003E E. 5\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\n\n\u003Clabel for=\"Q6_expl\"\u003E\u003Cstrong\u003ESau đó giải thích tại sao bạn chọn đáp án đó:\u003C\u002Fstrong\u003E\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Ctextarea name=\"Q6_expl\" rows=\"4\" cols=\"60\" placeholder=\"Viết lý do của bạn tại đây...\"\u003E\u003C\u002Ftextarea\u003E\u003Cbr\u003E\u003Cbr\u003E\n\n    \u003Cbutton type=\"submit\"\u003ETiếp tục\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Form"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cform\u003E\n \u003Ch3\u003EPhần 5b :\u003C\u002Fh3\u003E\n \n\u003Cp\u003E\n  \u003Cimg src=\"https:\u002F\u002Fi.imgur.com\u002FPRx14nc.png\" alt=\"Hình minh họa\" width=\"50%\"\u003E\n\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EHãy chọn một trong các hình từ 1 đến 5, phù hợp với vị trí còn trống của hình phác bên trên: \u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q7\" value=\"1\" required\u003E A. 1\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q7\" value=\"2\"\u003E B. 2\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q7\" value=\"3\"\u003E C. 3\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q7\" value=\"4\"\u003E D. 4\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q7\" value=\"5\"\u003E E. 5\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\n\n\n    \u003Cbutton type=\"submit\"\u003ETiếp tục\u003C\u002Fbutton\u003E\n\u003C\u002Fform\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {},
      "title": "Form"
    },
    {
      "type": "lab.html.Form",
      "content": "\u003Cform\u003E\n \u003Ch3\u003EPhần 5c :\u003C\u002Fh3\u003E\n \n\u003Cp\u003E\n  \u003Cimg src=\"https:\u002F\u002Fi.imgur.com\u002FrHAqc69.png\" alt=\"Hình minh họa\" width=\"50%\"\u003E\n\u003C\u002Fp\u003E\n\n\u003Cp\u003E\u003Cstrong\u003EHãy chọn một trong các hình từ 1 đến 5, phù hợp với vị trí còn trống của hình phác bên trên: \u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\n\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q8\" value=\"1\" required\u003E A. 1\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q8\" value=\"2\"\u003E B. 2\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q8\" value=\"3\"\u003E C. 3\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q8\" value=\"4\"\u003E D. 4\u003C\u002Flabel\u003E\u003Cbr\u003E\n  \u003Clabel\u003E\u003Cinput type=\"radio\" name=\"Q8\" value=\"5\"\u003E E. 5\u003C\u002Flabel\u003E\u003Cbr\u003E\u003Cbr\u003E\n\n    \u003Cbutton type=\"submit\"\u003EGửi bài & Kết thúc khảo sát\u003C\u002Fbutton\u003E\n\n    \u003Cp style=\"font-style: italic; color: green;\"\u003E🎉 Cảm ơn bạn đã hoàn thành khảo sát! Kết quả của bạn đã được ghi nhận.\u003C\u002Fp\u003E\n\n\u003C\u002Fform\u003E",
      "scrollTop": true,
      "files": {},
      "responses": {
        "": ""
      },
      "parameters": {},
      "messageHandlers": {
        "after:end": function anonymous(
) {
          const dataToSend = study.options.datastore.exportJson(); 
fetch("AKfycbxB_TGMJU8wKmYf_z_c3XgyDGgmrm-sIteTyGmA-ljgLT6cquNVZlYK1UUf9RVrw728", {
  method: "POST",
   headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(dataToSend)
})
.then(response => {
  // Kiểm tra phản hồi
  if (!response.ok) throw new Error("Request failed " + response.status);
  return response.json();
})
.then(result => {
  console.log("Server response:", result);
})
.catch(error => {
  console.error("Fetch error:", error);
});

}
      },
      "title": "Form"
    },{
    "type": "lab.flow.End",
    "message": "Cảm ơn bạn đã tham gia khảo sát!",
    "timeout": 1000
}
  ]
})

// Let's go!
study.run()

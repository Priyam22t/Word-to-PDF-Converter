# 📄 Word to PDF Converter

A modern, full-stack **Word to PDF Converter** built with **Node.js** and **vanilla JavaScript**, featuring a clean SaaS-style UI, drag-and-drop uploads, animations, dark mode, and instant PDF downloads.

---

## ✨ Features

### 🖥️ Frontend (User Experience)
- 🎯 Clean, modern, SaaS-style interface
- 📂 Drag & drop file upload
- 🖱️ Click-to-upload support
- 📄 File preview with name and size
- ❌ Remove uploaded files before conversion
- 🌙 Dark mode toggle
- 🔔 Toast notifications (no browser alerts)
- 🎞️ Animated upload icon
- 🚫 File validation (type & size)
- 📱 Responsive design (desktop & mobile)
- 🧭 Fixed top navigation bar

### ⚙️ Backend (Server & Conversion)
- 📤 Secure file upload using Multer
- 🔄 Word (.docx) → PDF conversion
- ⚡ Real-time conversion
- 📥 Automatic PDF download
- 🧹 Temporary file cleanup after conversion
- 🌐 CORS enabled for frontend integration

---

## 🧠 Why This Project?

This project was built to demonstrate real-world **full-stack development**, clean **UI/UX design**, and proper **client–server interaction**. It focuses on usability, polish, and scalability, making it ideal for portfolios, demos, and interviews.

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3 (animations, gradients, dark mode)
- Vanilla JavaScript

### Backend
- Node.js
- Express.js
- Multer
- docx-pdf
- CORS

---

## 📂 Project Structure

Word-to-PDF-Converter-App/
├── Backend/
│   ├── node_modules/
│   ├── uploads/
│   ├── index.js
│   ├── package.json
│   └── package-lock.json
├── Frontend/
│   └── index.html
└── README.md

---

## 🚀 Getting Started

### ✅ Prerequisites
- Node.js (v16+)
- npm
- Modern web browser

---

### 🔧 Backend Setup

cd Backend  
npm install  
npm start  

Server runs at:  
http://localhost:3000

---

### 🌐 Frontend Setup

Open `Frontend/index.html` in your browser  
(or use Live Server)

---

## 🔄 How It Works

1. User uploads a `.docx` file
2. Frontend validates file type and size
3. File is sent to backend using FormData
4. Backend converts Word to PDF
5. PDF is returned and downloaded automatically
6. Temporary files are deleted from the server

---

## 🔐 File Validation Rules

- Only `.docx` files allowed
- Maximum file size: 5MB
- Errors shown via toast notifications

---

## 🌙 Dark Mode

- Toggle dark mode using the UI button
- UI updates instantly including navbar and cards

---

## 🎨 UI & Animations

- Floating upload icon
- Drag-over glow animation
- Smooth hover effects
- Toast-based user feedback
- Fully responsive layout

---

## 🧪 Use Cases

- Assignment submission
- Resume conversion
- Office document sharing
- Portfolio demonstration
- Learning full-stack file handling

---

## 📈 Future Enhancements

- Multi-file conversion with ZIP download
- Conversion history
- Authentication
- Cloud storage
- More file types (PPT, XLS)
- Live deployment

---

## 🧩 Limitations

- Single-file conversion per request
- No persistent storage
- Local backend required

---

## ❤️ Author

**Priyam**

Built with passion for clean UI and real-world development.

---

## 📜 License

MIT License

---

## ⭐ Support

If you like this project, please ⭐ the repository and share your feedback.

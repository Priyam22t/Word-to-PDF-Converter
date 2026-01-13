const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const docxConverter = require("docx-pdf");
const fs = require("fs");

const app = express();
app.use(cors());

// ================= MULTER CONFIG =================
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// ================= ROUTES =================

// Home route
app.get("/", (req, res) => {
  res.send("Word to PDF Converter API is running");
});

// Upload only (for testing)
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({
    message: "File uploaded successfully",
    file: req.file
  });
});

// ✅ WORD → PDF CONVERSION
app.post("/convert", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }

  const inputPath = req.file.path;
  const outputPath = `uploads/${Date.now()}.pdf`;

  docxConverter(inputPath, outputPath, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Conversion failed" });
    }

    res.download(outputPath, "converted.pdf", () => {
      fs.unlinkSync(inputPath);   // delete uploaded docx
      fs.unlinkSync(outputPath);  // delete pdf after download
    });
  });
});

// ================= SERVER =================
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});

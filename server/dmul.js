const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3001;

// Multer configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Destination folder for storing uploaded files
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // Rename the uploaded file
  }
});

const upload = multer({ storage: storage });

// Upload endpoint
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded.');
  }y

  // File uploaded successfully
  res.send('File uploaded.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

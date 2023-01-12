const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "Uploads");
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const filter = (req, file, cb) => {
  const ext = path.extname(file.originalname);
  if (![".jpg", ".png"].includes(ext)) {
    return cb(new Error("Image not valid"));
  }
  cd(null, true);
};

const imageuploads = multer({
  storage: storage,
  fileFilter: filter,
}).single("Image");

module.exports = imageuploads;

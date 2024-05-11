const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const create_unique_filename = (filename) => {
  console.log("bruh")
  return filename
}

module.exports = { fileFilter, create_unique_filename }

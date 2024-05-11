const { v4: uuidv4 } = require('uuid');

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const create_unique_filename = (filename) => {
  const ext = filename.split(".").pop().toLowerCase();
  const uniqueFilename = uuidv4().replace(/-/g, '');
  return `${uniqueFilename}.${ext}`;
}

module.exports = { fileFilter, create_unique_filename }

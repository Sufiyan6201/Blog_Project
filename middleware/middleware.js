const multer = require('multer');
let count = 1;
const storage = multer.diskStorage({
     destination: (req, file, cb) => {
          cb(null, 'uploads/');
     },
     filename: (req, file, cb) => {
          cb(null, Date.now() + '-' + count++ + file.originalname);
     }
});
const uploadImage = multer({
     storage: storage,
}).single('image');

module.exports = uploadImage
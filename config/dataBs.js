const mongoose = require('mongoose');
require('dotenv').config();

const db = async () => {
     try {
          await mongoose.connect(process.env.DB_URL);
          console.log("Database connected successfully");
     }
     catch (err) {
          console.log(err);
     }

}
module.exports = db
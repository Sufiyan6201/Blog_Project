const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
     name: String,
     date:Number,
     image: String,
     dsc: String
})

const blogDB = mongoose.model('movieTable', blogSchema);

module.exports = blogDB;
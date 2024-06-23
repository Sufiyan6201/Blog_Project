const { error } = require("console");
const uploadImage = require("../middleware/middleware");
const fs = require('fs');
const blogDB = require("../models/blogSchema");
const BlogUi = async (req, res) => {
     try {
          const data = await blogDB.find({})
          console.log(data)
          return res.render('BlogUi', { data });
     } catch (error) {
          console.log(error);
     }
}
const editDelete = async (req, res) => {
     try {
          const data = await blogDB.find({})
          console.log(data)
          return res.render('editDelete', { data });
     } catch (error) {
          console.log(error);
     }

}

const addMovies = async (req, res) => {
     try {
          return res.render('addMovies')
     } catch (error) {
          console.log(error);
     }
}
const insertData = async (req, res) => {
     const { name, date, image, dsc, id } = req.body;
     try {
          if (id) {
               const data = await blogDB.findByIdAndUpdate(id, { name, date, image, dsc })
               return res.redirect('/')
          } else {
               const data = await blogDB.create({
                    name,
                    date,
                    image,
                    dsc
               });
               return res.redirect('/editDelete')
          }
     } catch (error) {
          console.log(error);
     }
}

const deleteData = async (req, res) => {
     const { id } = req.params
     try {
          await blogDB.findByIdAndDelete(id)
          console.log("data delete")
          return res.redirect('/editDelete')
     } catch (error) {
          console.log(error);
     }
}
const editData = async (req, res) => {
     const { id } = req.params
     try {
          const data = await blogDB.findById(id)
          return res.render('edit', { data })

     } catch (error) {
          console.log(error);
     }
}



module.exports = { BlogUi, addMovies, insertData, deleteData, editData,editDelete}
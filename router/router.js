const { Router } = require("express");
const { BlogUi,editDelete, addMovies, insertData, deleteData, editData, signup } = require("../controller/controller");

const router = Router();
router.get('/', BlogUi);
router.get('/editDelete',editDelete);
router.get('/addMovie',addMovies);
router.post('/insertData',insertData);
router.get('/deleteData:id',deleteData)
router.get('/editData:id',editData)
module.exports = router


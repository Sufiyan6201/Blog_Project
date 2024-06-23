const { Router } = require("express");
const { signup, login, insertUserData, loginPage, logout } = require("../controller/userControler");


const userRouter= Router();
userRouter.get('/signup',signup)
userRouter.get('/login',loginPage)
userRouter.get('/logout',logout)
userRouter.post('/login',login)
userRouter.post('/insertUserData',insertUserData)

module.exports=userRouter
const userDB = require("../models/user.Schema");

const loginPage = (req, res) => {
     try {
          res.render('login')
     } catch (error) {
          console.log(error);
     }
}
const signup = (req, res) => {
     try {
          res.render('signup')
     } catch (error) {
          console.log(error);
     }
}
const insertUserData = async (req, res) => {
     const { name, email, password, phone } = req.body;

     try {
          await userDB.create({ name, email, password, phone });
          return res.redirect('/login')
     } catch (error) {
          console.log(error);
     }
}

const login = async (req, res) => {
     const { name, password } = req.body;
     try {
          const user = await userDB.findOne({ name:name });
          if (!user) {
               console.log("User Not Found");
               return res.redirect('/login');
          }
          if (user.password != password) {
               console.log(password);
               console.log(user.password);
               console.log("Password Not Match");
               return res.redirect('/login');

          }
          return res.cookie('user', user.id).redirect('/')
     }
     catch (error) {
          console.log(error);
     }

}
const logout = async(req,res)=>{
     res.clearCookie('user');
     return res.redirect('/login');
}
module.exports = { loginPage, signup, insertUserData,login,logout }
const userAuth=(req,res,next)=>{
     const user = req.cookies.user
     if(user){
          next()
     }else{
          return res.redirect('/login')
     }
}

module.exports=userAuth;
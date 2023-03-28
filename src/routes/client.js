const express = require("express");
const router = express.Router();
const auth = require('../middlewares/auth').authenticateToken
const User = require('../models/user')
const jwt = require('jsonwebtoken')


const {ACCESS_JWT_SECRET} = process.env




router.get("/",(req, res)=> {
  res.send("Client home page");
});

router.get('/signup',(req,res)=>{
  res.send('Signup Page')
})
router.post('/signup', async (req,res)=>{
  try {
    const user = await User.create(req.body);
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error" });
  }

})

router.get("/profile",(req, res)=>{
  res.send("About this Client");
});

router.get('/login',(req,res)=>{
  res.send('Login Page')
})

router.post('/login', async (req,res)=>{
  console.log("login body: ", req.body);
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  console.log("user: ", user);
  if (user) {
    console.log("if user: ", user);
    const token = jwt.sign(
      {
        user:user,
      },
      ACCESS_JWT_SECRET,
      {
        expiresIn: '1h',
      }
    );
    return res.json({ status: "ok", accessToken: token});
  } else {
    return res.json({ status: "error", user: false });
  }
})
module.exports = router;
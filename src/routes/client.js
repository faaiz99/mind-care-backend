const router = require("express").Router();
const authenticateToken = require('../middlewares/auth').authenticateToken
const revalidateToken = require('../middlewares/auth').revalidateToken
const assignTokens = require('../middlewares/auth').assignTokens
const Client = require('../models/client')
router.get("/", (req, res) => {
  res.send("Client home page");
});

router.post('/signup', async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error" });
  }
})

router.get('/refresh-token', revalidateToken, (req,res,next)=>{
  const client = req.user.user
  const tokens = assignTokens(client)
  const {accessToken, refreshToken} = tokens
  if (tokens != null || tokens != undefined) {
    return res.json({ status: "OK", accessToken:accessToken, refreshToken:refreshToken });
  }
  else
    return res.json({ status: "error", user: false });
  next()
})

router.get("/profile", authenticateToken, (req, res) => {
  res.send("About this Client");
});

router.post('/login', async (req, res) => {
  const client = await Client.findOne({
    email: req.body.email,
    password: req.body.password,
  })

  if(client== null || client == undefined)
    return res.json({status:404, message:"Account does not exist"})
  const tokens = assignTokens(client)
  const {accessToken, refreshToken} = tokens
  if (tokens != null || tokens != undefined) {
    return res.json({ status: "OK", accessToken: accessToken, refreshToken:refreshToken });
  }
  else
    return res.json({ status: "error", user: false });
})
module.exports = router;
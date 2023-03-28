exports.authenticateToken = (req, res, next)=> {
  // console.log("req.headers: ", req.headers);
  console.log("req.authorization: ", req.headers["authorization"]);
  const authHeader = req.headers["authorization"];
  console.log("authheader: ", authHeader);
  // console.log("body: ", req);
  let token = authHeader && authHeader.split(" ")[1];
  // token = token && token.replace(/"$/, "");
  //console.log("token:", token);
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.send(err);
    req.user = user;
    next();
  });
}


function ensureLoggedIn(req, res, next){
  console.log(req.user);
  if(req.user){
    next();
  }else{
    res.status(401)
    next(new Error('Un-Authorized'))
  }
}

module.exports = {
  ensureLoggedIn
}
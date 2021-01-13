
function requisito(req, res, next) {
            
  if (req.query.name == "Ada" || req.query.name == "Greta" || req.query.name == "Vim" || req.query.name =="Tim") {
    next()
  }
  else {
      res.send("No tienes los privilegios para ingresar")
  }
}



module.exports = requisito;
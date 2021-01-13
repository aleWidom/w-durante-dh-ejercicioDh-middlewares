var express = require('express');
var router = express.Router();

const requisito = require('../middlewares/requisito')

router.get("/",function(req,res) {
    res.render("index")
})

router.get("/admin/", requisito, function(req,res) {
    res.send("Hola Admin  " + req.query.name)
})


module.exports = router;



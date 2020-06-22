var express = require('express');
var router = express.Router();
let indexController = require ('../controllers/indexController')

/* conexion con el controller. */
router.get('/', indexController.index);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

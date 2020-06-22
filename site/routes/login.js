var express = require('express');
var router = express.Router();
let loginController = require ('../controllers/loginController')

/* GET users listing. */
router.get('/', loginController.index);


module.exports = router;
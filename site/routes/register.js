var express = require('express');
var router = express.Router();
let registerController = require ('../controllers/registerController')
var guestMiddleware = require('../middleWares/guestMiddleware');

/* GET users listing. */
router.get('/', guestMiddleware, registerController.index);
router.post('/', registerController.store);


module.exports = router;

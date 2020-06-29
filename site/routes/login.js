var express = require('express');
var router = express.Router();
let loginController = require ('../controllers/loginController')
var authMiddleware = require('../middleWares/authMiddleware');


/* GET users listing. */
router.get('/', authMiddleware, loginController.index);

router.get('/login', loginController.login);
//router.post('/login', [
//    check('email').isEmail().withMessage('Usted no esta ingresando un mail valido'),
//    check('password').isLength({max:8}).withMessage('La contraseña debe tener 8 caracteres'),
//], loginController.processLogin);



module.exports = router;
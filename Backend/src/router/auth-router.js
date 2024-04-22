const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth-controller');

router.route('/').get(authController.home);
router.route('/register').post(authController.register)
router.route('/login').post(authController.login)
router.route('/hospitalReg').post(authController.hospitalReg);
router.route('/hospitalDetails').post(authController.hospitalDetails);
module.exports = router;
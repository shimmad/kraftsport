const express = require('express');
const router = express.Router();

const authValido = require('../middleware/authValido');
const catchAsync = require('../utils/catchAsync');
const authController = require('../controllers/authController');


//post de login
router.post('/login', catchAsync(authController.login));

//rutaprotegida
router.get ("/user/me", authValido,(req, res) => {
  res.json({ user: req.user });
});

module.exports = router;
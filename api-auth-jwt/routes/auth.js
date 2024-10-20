// routes/auth.js
const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const authenticateToken = require('../middleware/auth');

// Rutas públicas
router.post('/register', register);
router.post('/login', login);

// Rutas protegidas (ejemplo)
router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: 'Perfil del usuario', user: req.user });
});

module.exports = router;

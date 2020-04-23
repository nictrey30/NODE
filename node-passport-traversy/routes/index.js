const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');

// welcome page
router.get('/', (req, res) => {
  res.render('welcome');
});
// dashboard page
// we want the dashboard route to be protectet with auth
router.get('/dashboard', ensureAuthenticated, (req, res) => {
  res.render('dashboard', { name: req.user.name });
});

module.exports = router;

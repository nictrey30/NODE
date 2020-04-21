const express = require('express');
const router = express.Router();
const bycrypt = require('bcryptjs');

// User Model
const User = require('../models/User');

// login page
router.get('/login', (req, res) => {
  res.render('login');
});
// register page
router.get('/register', (req, res) => {
  res.render('register');
});
// registe handle
router.post('/register', (req, res) => {
  const { name, email, password, password2 } = req.body;
  let errors = [];

  // check required fields
  if (!name || !email || !password || !password2) {
    errors.push({ msg: 'Please fill in all fields' });
  }
  // check password match
  if (password !== password2) {
    errors.push({ msg: 'Passwords do not match' });
  }
  // check password is at least 6 characters long
  if (password.length < 6) {
    errors.push({ msg: 'Password should be at least 6 characters' });
  }
  if (errors.length > 0) {
    res.render('register', { errors, name, email, password, password2 });
  } else {
    // validation pass
    // before we submit the user we make sure that the User doesn't exist
    User.findOne({ email: email }).then((user) => {
      if (user) {
        // user exists
        errors.push({ msg: 'Email is already registered' });
        res.render('register', { errors, name, email, password, password2 });
      } else {
        const newUser = new User({ name, email, password });
        // hash password
        bycrypt.genSalt(10, (err, salt) =>
          bycrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            // set password to hashed password
            newUser.password = hash;
            // save user
            newUser
              .save()
              .then((user) => {
                req.flash(
                  'success_msg',
                  'You are now registered and can log in'
                );
                res.redirect('/users/login');
              })
              .catch((err) => console.log(err));
          })
        );
      }
    });
  }
});
module.exports = router;

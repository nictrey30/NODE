const express = require('express'),
  app = express(),
  expressLayouts = require('express-ejs-layouts'),
  PORT = process.env.PORT || 5000,
  flash = require('connect-flash'),
  session = require('express-session');

const mongoose = require('mongoose');

// DB config
const db = require('./config/keys').MongoURI;

// connect to mongo
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('mongodb connected'))
  .catch((err) => console.log(err));

// ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

// to get data from the form with req.body
app.use(express.urlencoded({ extended: false }));

// express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// connect-flash
app.use(flash());

// global vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

app.use('/', require('./routes'));
app.use('/users', require('./routes/users'));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

const express = require('express'),
  app = express(),
  expressLayouts = require('express-ejs-layouts'),
  PORT = process.env.PORT || 5000;

// ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

app.use('/', require('./routes'));
app.use('/users', require('./routes/users'));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

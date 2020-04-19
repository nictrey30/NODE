const express = require('express');
const app = express();
const path = require('path');
const members = require('./Members');
const exphbs = require('express-handlebars');

const logger = require('./middleware/logger');
const PORT = process.env.PORT || 5000;

// init middleware
// app.use(logger);

// handlebars middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Body Parser Middleware
app.use(express.json());
// handle form submissions
app.use(express.urlencoded({ extended: false }));

// homepage route
app.get('/', (req, res) =>
  res.render('index', {
    title: 'Member App',
    members
  })
);

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'));

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

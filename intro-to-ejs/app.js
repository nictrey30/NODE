const express = require('express'),
  bodyParser = require('body-parser'),
  expressLayouts = require('express-ejs-layouts'),
  cors = require('cors'),
  path = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(expressLayouts);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {
    people: [{ name: 'Dave' }, { name: 'Jerry' }, { name: 'Iuliana' }]
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.listen(3000, () => console.log(`server started on port 3000`));

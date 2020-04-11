const express = require('express'),
  app = express();
let path = require('path');
const PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(__dirname + '/public'));

app.use(require('./routes'));

// app.get('/', (req, res, next) => {
//   console.log('looking for something in the database');
//   next();
// });

// handling unkown requests
app.use((req, res) => {
  res.status(404).send('Uknown Request');
});

app.listen(PORT, () => console.log(`server started on port ${PORT}`));

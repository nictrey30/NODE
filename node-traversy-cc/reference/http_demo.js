const http = require('http');

// create server object
http
  .createServer((req, res) => {
    // output to the browser
    res.write('Hello World!');
    res.end();
  })
  .listen(5000, () => console.log('server running on port 5000'));

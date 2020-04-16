const url = require('url');
const myUrl = new URL(
  'http://mywebsite.com:8000/hello.html?id=100&status=active'
);

// serialized url
console.log(myUrl.href);
console.log(myUrl.toString);
// host (root domain)
console.log(myUrl.host);
// host name - doesn't get the port
console.log(myUrl.hostname);

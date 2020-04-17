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
// serialized query
console.log(myUrl.search);
// params object
console.log(myUrl.searchParams);
// add params
myUrl.searchParams.append('letters', 'abcde');
console.log(myUrl.searchParams);
// loop through params
myUrl.searchParams.forEach((key, value) => console.log(`${key}: ${value}`));

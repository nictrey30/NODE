const path = require('path');
// basename - gets the base filename
console.log(path.basename(__filename));
// directory name
console.log(path.dirname(__filename));
// file extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));
// {
//   root: '/',
//   dir: '/Users/trey/Learn/NODE/node-traversy-cc/reference',
//   base: 'path_demo.js',
//   ext: '.js',
//   name: 'path_demo'
// }
// concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));

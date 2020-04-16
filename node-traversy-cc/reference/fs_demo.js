const fs = require('fs');
const path = require('path');

//  create folder
// fs.mkdir(path[, options], callback)
// fs.mkdir(path.join(__dirname, '/test'), { recursive: true }, (err) => {
//   if (err) throw err;
//   console.log('Folder created');
// });

// create and write to file
// fs.writeFile(
//   path.join(__dirname, '/test', 'hello.txt'),
//   'Hello World!',
//   (err) => {
//     if (err) throw err;
//     console.log('File created and written to...');
//     // file append
//     fs.appendFile(
//       path.join(__dirname, '/test', 'hello.txt'),
//       '\nI love Node.Js',
//       (err) => {
//         if (err) throw err;
//         console.log('File created and appended to...');
//       }
//     );
//   }
// );

// read file
// we need to put the encoding 'utf8' as second paramaeter to get back the data, otherwise we get a raw buffer
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});

// rename file
fs.rename(
  path.join(__dirname, '/test', 'hello.txt'),
  path.join(__dirname, '/test', 'helloWorld.txt'),
  (err, data) => {
    if (err) throw err;
    console.log('File renamed...');
  }
);

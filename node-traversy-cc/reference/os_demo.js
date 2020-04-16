const os = require('os');

// platform
console.log(os.platform());
// cpu arch
console.log(os.arch());
// cpu core info
console.log(os.cpus());
// free memory
console.log(`free mem: ${(os.freemem() / Math.pow(1024, 3)).toFixed(2)}`);
// total memory
console.log(`total mem: ${(os.totalmem() / Math.pow(1024, 3)).toFixed(2)}`);
// home dir
console.log(os.homedir());
// uptime
console.log(os.uptime());

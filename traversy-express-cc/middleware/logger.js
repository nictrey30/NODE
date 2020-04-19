const moment = require('moment');
// middleware unction
const logger = (req, res, next) => {
  // log the url that is hit and the date
  console.log(
    `${req.protocol}://${req.get('host')}${
      req.originalUrl
    }: ${moment().format()}`
  );
  next();
};
module.exports = logger;

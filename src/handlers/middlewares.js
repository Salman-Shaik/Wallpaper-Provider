const fs = require('fs');
const utilities = require('../library/utils');

let logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

let fileLogger = (req, res, next) => {
  let date = new Date();
<<<<<<< HEAD
  let filePath = `./logs/${date.toDateString().replace(' ','_')}.log`;
=======
  let filePath = `./logs/${date.toDateString().split(" ").join("_")}.log`;
>>>>>>> Resolves naming convention isuues with log files.
  let logData = getLogData(req, res, date);
  fileHandler(fs, filePath, logData);
  next();
};

let getLogData = (req, res, date) => {
  return ['------------------------------',
    `${date}`,
    `${req.method} ${req.url}`,
    `HEADERS=> ${utilities.toS(req.headers)}`,
    `COOKIES=> ${utilities.toS(req.cookies)}`,
    `BODY=> ${utilities.toS(req.body)}`, ''
  ].join('\n');
};

let fileHandler = (fs, filePath, logData) => {
  if (!fs.existsSync(filePath)) {
    fs.open(filePath, 'w', (err) => {
      fileAsyncCallback(err, ` ${filePath} is created.`);
    });
  }
  fs.appendFile(filePath, logData, (err) => {
    fileAsyncCallback(err);
  });
};

let fileAsyncCallback = (err, message = '') => {
  if (err) {
    throw err;
  }
  console.log(message);
};

module.exports = {
  logger,
  fileLogger
};

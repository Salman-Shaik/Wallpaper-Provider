const http = require('http');
const app = require('./app.js');

const PORT = process.env.PORT || 8000

let server = http.createServer(app);
server.listen(PORT);
console.log(`server is listening to ${PORT}.`);

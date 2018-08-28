const app = require('express')();
const lib = require('./src/handlers/middlewares');
const getHandlers = require('./src/handlers/getHandlers');
module.exports=app;


app.use(lib.logger);

app.get('/wallpaper',getHandlers.getWallpaper);

const app = require('express')();
module.exports=app;

app.use((req,res)=>{console.log(`${req.method} ${req.url}`)});

const express = require('express')
const port = 1337

const app = express();
const thinkpadRouter = require('./routes/thinkpad');

app.use('/thinkpad', thinkpadRouter);


app.listen(port, ()=>{
    console.log(`now listening on port: ${port}`)
})







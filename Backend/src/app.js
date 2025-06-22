const express = require('express');
const airoutes = require('./routes/ai.routes')


const app = express();

app.use(express.json())
app.get('/', (req,res) => {
    console.log("hello server chal rha hai");
    res.send("ji haan chal rha hai server")
    
})

app.use('/ai', airoutes)

module.exports = app;
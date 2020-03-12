const express = require('express');
const app = express();


app.get('/', (req, res) => {
    
    res.send('<h1><i>Hello world</i><h1>')
})

app.listen(3000, (req, res) => {

    console.log("listening on port 3000");
})
const express = require('express');
const app = express();


app.get('/', (req, res) => {
    
    res.send('<h1><i>Hello world</i><h1>')
})

app.get('/contact', (req, res) => {
    res.send('Call me at: 281-222-2222');
})

app.get('/about', (req, res) => {
    res.send('I am a lover of Mola Ali a.s <3');
})

app.listen(3000, (req, res) => {

    console.log("listening on port 3000");
})
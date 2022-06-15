const htmlRouter = require('express').Router();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/index.html'));
}); 

// route to notes.html 
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname,'./public/notes.html'));
}); 

module.exports = htmlRouter;
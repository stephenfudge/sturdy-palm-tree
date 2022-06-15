// declaring express and the port
const express = require('express');
const app = express();
const PORT = 3001 || process.env.PORT;

// setting the static location for things being referenced
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', );


// url endpoints 
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
  });

// letting you know what port is being used
app.listen(PORT, () =>
    console.log(`Express server listening on port ${PORT}!`)
);
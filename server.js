// declaring express and the port
const express = require('express');
const app = express();
const PORT = 3001 || process.env.PORT;

// setting the static location for things being referenced
app.use(express.static('public'));

// url endpoints 
app.use('/api', );
app.use('/', );



// letting you know what port is being used
app.listen(PORT, () =>
    console.log(`Express server listening on port ${PORT}!`)
);
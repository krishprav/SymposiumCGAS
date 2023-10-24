var index = require('./routes/index');
const express = require('express');
const app = express();
const path = require('path');
var PORT = process.env.PORT || '3005';
app.set('port', PORT);
app.use(express.static('public'));


const session = require('express-session');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const fs = require('fs');

// Serve static files from the 'assets' directory
app.use('/public', express.static(path.join(__dirname, '/public')));

app.use('/login', index);


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
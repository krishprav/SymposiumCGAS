var index = require('./routes/index');
app.use('/login', index);


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config()
require('./config/database')

const app = express();

app.use(logger('dev'));
app.use(express.json());

app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
app.use(express.static(path.join(__dirname, 'build')))

app.use(require('./config/checkToken'))

app.use('/api/users', require('./routes/api/users'))
app.use('/api/pickups', require('./routes/api/pickups'))

//Protect API Routes
const ensureLoggedIn = require('./config/ensureLoggedIn');
app.use('/api/profiles', ensureLoggedIn, require('./routes/api/profiles'))
app.use('/api/usersGame', ensureLoggedIn, require('./routes/api/usersGame'))

// "catch-all" route that will match all GET requests that don't match an API route defined above
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

const port = process.env.PORT || 3001

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});
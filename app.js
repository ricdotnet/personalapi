let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let cors = require('cors')

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let emailRouter = require('./routes/email')

let app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', emailRouter)

module.exports = app;

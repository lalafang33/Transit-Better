var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testbBackendRouter = require("./routes/test-backend");

var app = express();
const PORT = process.env.PORT || 9000;

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'))
app.set("view engine", "ejs");

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/test-backend", testbBackendRouter);




module.exports = app;

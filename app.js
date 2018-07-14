var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var sassMiddleware = require('node-sass-middleware');

var indexRouter = require('./app/routes/index');
var usersRouter = require('./app/routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app', 'public', 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(sassMiddleware({
    src: path.join(__dirname, 'app', 'public'),
    dest: path.join(__dirname, 'app', 'public'),
    indentedSyntax: false, // true = .sass and false = .scss
    sourceMap: true,
    outputStyle: 'compressed'
}));
app.use(express.static(path.join(__dirname, 'app', 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

if (app.get('env') === 'development')
    app.locals.pretty = true;

module.exports = app;
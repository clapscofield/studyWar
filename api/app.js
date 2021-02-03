var createError = require('http-errors');
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var logger = require('morgan');
const cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var instituicaoRouter = require('./routes/instituicao');
var guerraEstudosRouter = require('./routes/guerraEstudos');
var equipeRouter = require('./routes/equipe');
var estudanteRouter = require('./routes/estudante');

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// routes
require('./routes/auth.routes')(app);
require('./routes/authEstudante.routes')(app);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/instituicao', instituicaoRouter);
app.use('/guerraEstudos', guerraEstudosRouter);
app.use('/equipe', equipeRouter);
app.use('/estudante', estudanteRouter);

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

module.exports = app;

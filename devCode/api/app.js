var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors= require('cors');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testApiRouter= require('./routes/testApi');
var VideoApi= require('./routes/videoApi');
var callApi = require("./routes/callApi");
var settingsApi = require("./routes/settingsApi");
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/testApi', testApiRouter);
//video api
app.use('/Video/AudioInput', VideoApi);
app.use('/Video/AudioOutputOn', VideoApi);
app.use('/Video/AudioOutputOff', VideoApi);
app.use('/Video/MicrophoneMute', VideoApi);
app.use('/Video/Volume', VideoApi);
app.use('/Video/BookingId', VideoApi);
app.use('/Video/DeviceStatus', VideoApi);
app.use('/Video/DeviceName', VideoApi);
app.use('/Video/ActiveSpeaker', VideoApi);
app.use('/Video/CameraInfo', VideoApi);
app.use('/Video/SpeakerTrack', VideoApi);

//call api
app.use('/Calls/AudioInput', callApi);
app.use('/Calls/AudioOutputOn', callApi);
app.use('/Calls/AudioOutputOff', callApi);
app.use('/Calls/MicrophoneMute', callApi);
app.use('/Calls/Volume', callApi);
app.use('/Calls/BookingId', callApi);
app.use('/Calls/DeviceStatus', callApi);
app.use('/Calls/DeviceName', callApi);
app.use('/Calls/ActiveSpeaker', callApi);
app.use('/Calls/CameraInfo', callApi);
app.use('/Calls/SpeakerTrack', callApi);

//settings api
app.use('/Settings/AudioInput', settingsApi);
app.use('/Settings/AudioOutputOn', settingsApi);
app.use('/Settings/AudioOutputOff', settingsApi);
app.use('/Settings/MicrophoneMute', settingsApi);
app.use('/Settings/Volume', settingsApi);
app.use('/Settings/BookingId', settingsApi);
app.use('/Settings/DeviceStatus', settingsApi);
app.use('/Settings/DeviceName', settingsApi);
app.use('/Settings/ActiveSpeaker', settingsApi);
app.use('/Settings/CameraInfo', settingsApi);
app.use('/Settings/SpeakerTrack', settingsApi);


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

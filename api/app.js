const express =  require('express')
const cors = require('cors')
const morgan = require('morgan');
const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/errorController');
const filmsRouter = require('./routes/filmsRouter')
const app = express();
app.use(cors());
app.options('*', cors());


app.use(morgan('dev'));
app.use("/api/films", filmsRouter);

app.all('*', (req, res, next) => {
    next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
  });

app.use(globalErrorHandler);

module.exports =   app;

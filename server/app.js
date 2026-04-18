const express = require('express');
const cors = require('cors');
const router = require('./routes');
const { errorHandler } = require('./middleware');

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));
app.use('/images', express.static('public/image'));
app.use('/api', router);
app.use(errorHandler.validationErrorHandler);
app.use(errorHandler.globalErrorHandler);

module.exports = app;

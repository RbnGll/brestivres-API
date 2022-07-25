const express = require('express');
const helmet = require('helmet')
const newsRoutes = require('./routes/news.route');

const app = express();

app.use(helmet());

app.use('/api/route', newsRoutes);

module.exports = app;
const express = require('express');
const morgan = require('morgan');

require('dotenv').config();
/*
require('./config/mongo').connect();
*/

const middleware = require('../config/middleware');
const router = require('../config/router');
const mongo = require('../config/mongo');

const app = express();

app.use(express.json());

app.use(express.urlencoded({
    extended: false,
}));

app.use(morgan('tiny'));

middleware.init(app);

router.init(app);

mongo.init(app);

app.set('port', process.env.PORT || 3000);

module.exports = app;

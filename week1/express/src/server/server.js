const express = require('express');

require('dotenv').config();

const middleware = require('../config/middleware');
const router = require('../config/router');
const mongo = require('../config/mongo');

const app = express();

middleware.init(app);

router.init(app);

mongo.init(app);

app.set('port', process.env.PORT || 3000);

module.exports = app;

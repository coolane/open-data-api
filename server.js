var dotenv = require('dotenv');
dotenv.config({silent: true});
var express = require('express');
var bodyParser = require('body-parser');
var Bootstrap = require('./boot')

var app = express();
app.use(bodyParser.json());
var bootstrap = new Bootstrap()
bootstrap.boot(app);
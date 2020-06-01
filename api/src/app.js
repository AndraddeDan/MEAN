/* Descrição: Arquivo responsável pela configuração da aplicação */

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

// Database Import
const database = require('./config/database');

mongoose.Promise = global.Promise;

// Database Conection
mongoose.connect(database.local.localUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(
  () => console.log('Connection success'),
  (err) => {
    console.error(`Connection error: ${err}`);
    process.exit();
  }
);

// => Rotas

const index = require('./routes/index');
const planoRoute = require('./routes/plano.routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(morgan('dev'));
app.use(cors());

app.use('/api/v1', index);
app.use('/planos', planoRoute)

module.exports = app;

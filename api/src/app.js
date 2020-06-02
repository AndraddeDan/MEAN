/* Descrição: Arquivo responsável pela configuração da aplicação */
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();

// Database Import
const database = require('./config/database');
mongoose.Promise = global.Promise;

// Database Conection
mongoose.connect(database.local.localUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(
    () => console.log('Connection success'),
    (err) => {
      console.error(`Connection error: ${err}`);
      process.exit();
    });

// ROTAS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(morgan('dev'));

const index = require('./routes/index');
const planoRoute = require('./routes/plano.routes');
const precoRoute = require('./routes/preco.routes');
const dddRoute = require('./routes/ddd.routes');
const infos = require('./routes/infos.routes');

app.use('/api/v1', index);
app.use('/api/v1/planos', planoRoute);
app.use('/api/v1/precos', precoRoute);
app.use('/api/v1/ddds', dddRoute);
app.use('/api/v1/infos', infos);

module.exports = app;

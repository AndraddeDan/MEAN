/* Descrição: Arquivo responsável pela configuração da aplicação */

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
// const path = require('path');

const app = express();

// Database Import
const database = require('./config/database');

// Database Conection
mongoose.connect(database.local.localUrl, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => console.log('Connection success'),
    (err) => console.error(`Connection error: ${err}`)
);

// => Rotas

const index = require('./routes/index');
// const planoRoute = require('./routes/planoRoute');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(morgan('dev'));
app.use(cors());

app.use('/api/v1', index);
// app.use('/plano', planoRoute)

module.exports = app;

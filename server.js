const express = require('express');
const helmet = require('helmet');

const actionRouter = require('./data/helpers/actionModel.js');

const projectRouter = require('./data/helpers/projectModel.js');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

module.exports = server;

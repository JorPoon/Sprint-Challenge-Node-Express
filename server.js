const express = require('express');
const helmet = require('helmet');

const actionRouter = require('./data/Routers/action-router.js');

const projectRouter = require('./data/Routers/project-router.js');

const server = express();

server.use(express.json());
server.use(helmet());

server.use('/api/actions', actionRouter);
server.use('/api/projects', projectRouter);

module.exports = server;

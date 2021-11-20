const express = require('express');

const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const server = express();

server.use(helmet());
server.use(cors());
server.use(morgan('dev'));

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'This API is running.',
    });
});

module.exports = server;
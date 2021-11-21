const express = require('express');

const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const projectRouter = require('./project/router');
const resourceRouter = require('./resource/router');
const taskRouter = require('./task/router');



const server = express();
server.use(helmet());
server.use(cors());
server.use(morgan('dev'));
server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.get('/', (req, res) => {
    res.status(200).json({
        status: 200,
        message: 'This API is running.',
    });
});



server.use(errorHandling) // will trap "".catch/500 errors" happening above


module.exports = server;


// *catch all 500 errors middleware* 
function errorHandling(err, req, res, next) {
    console.log('@@@***inside catch all 500***@@@'),
        res.status(err.status || 500).json({
            message: err.message,
            status: 500
        })
}
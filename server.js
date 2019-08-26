const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('./auth/auth-router.js');

const server = express();

server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(logger);

server.use('/auth', authRouter);

server.get('/', (req, res) => {
    res.status(200).json({ Dustin: "It's working!!" });
})

function logger(req, res, next) {
    const method = req.method;
    const url = req.url;
    const timestamp = Date.now();
    console.log(`${method} request to ${url} at ${timestamp}`);
    next();
}

module.exports = server;
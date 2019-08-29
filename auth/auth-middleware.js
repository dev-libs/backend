const jwt = require('jsonwebtoken');
const secrets = require('./secrets');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    token
        // ? jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        ? jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
            err
                ? res.status(401).json({ error: 'unauthorized' })
                : req.user = { username: decodedToken.username }
                    next();
        })
        : res.status(400).json({ error: 'no token provided' })
}
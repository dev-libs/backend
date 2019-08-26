const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./auth-model.js');
const secrets = require('./secrets.js');
const restricted = require('./auth-middleware.js');

router.post('/register', async (req, res) => {
    let user = req.body;
    user.password = bcrypt.hashSync(user.password, 10);
    try {
        const newUser = await Users.addUser(user);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json(error.message)
    }
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;
    Users.getByFilter({ username })
        .first()
        .then(user => {
            if (!user && !bcrypt.compareSync(password, user.password)) {
                res.status(401).json({ error: 'incorrect username and/or password' })
            } else {
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome, ${user.username}`,
                    token
                })
            }
        })
        .catch(err => {
            res.status(200).json(err);
        })
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '1d'
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router;
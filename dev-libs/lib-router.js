const router = require('express').Router();

const Libs = require('./lib-model.js');
const restricted = require('../auth/auth-middleware.js');

router.get('/play/:id', restricted, async (req, res) => {
    const { id } = req.params;
    try {
        const lib = await Libs.getLibByCategory(id);
        id 
            ? res.status(200).json(lib[0])
            : res.status(404).json({ error: "no category with given ID found" })
    } catch (error) {
        res.status(500).json(error.message)
    }
})

router.post('/play', restricted, (req, res) => {
    const userAnswers = req.body.answers;
    const arr = [];
    if (userAnswers) {
        userAnswers.forEach(async answer => {
            try {
                const otherthing = await Libs.addAnswer(answer)
                if (otherthing) {
                    arr.push(otherthing)
                } else {
                    res.status(500).json({ message: 'error inserting answers' })
                }
            } catch(err) {
                res.status(500).json(err.message)
            } 
        })
        res.status(201).json({ message: `successfully created answers` })
    } else {
        res.status(400).json({ error: 'answers missing in request' })
    }
})

router.get('/answers', restricted, (req, res) => {
    Libs.getAnswers()
        .then(answers => {
            res.status(200).json(answers)
        })
        .catch(error => {
            res.status(500).json(error.message)
        })
})

module.exports = router;
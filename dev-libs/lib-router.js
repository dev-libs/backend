const router = require('express').Router();

const Libs = require('./lib-model.js');
const restricted = require('../auth/auth-middleware.js');

// GET LIB TEMPLATE
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

let instance = 1;
// POST ANSWERS 
router.post('/play', restricted, (req, res) => {
    const userAnswers = req.body.answers;
    instance++
    const arr = [];
    if (userAnswers) {
        userAnswers.forEach(async answer => {
            try {
                const otherthing = await Libs.addAnswer({...answer, instance})
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

// GET USERS LIBS
router.get('/user/:id', restricted, async (req, res) => {
    const { id } = req.params;
    try {
        const results = await Libs.getUserLibs(id)
        if (id) {
            res.status(200).json(results);
        } else {
            res.status(404).json({ error: 'user with given id not found' })
        }
    } catch (err) {
        res.status(500).json(err.message)
    }
})

// GET LIBS BY CATEGORY
router.get('/:id', restricted, async (req, res) => {
    const { id } = req.params;
    try {
        const lib = await Libs.getLibByCategory(id);        
        const answers = await Libs.getCompletedLibsByCategory(id);
        if (!id) {
            res.status(404).json({ error: 'no category with given id exists' });
        } else {
            res.status(200).json({ lib, answers});
        }
    } catch (error) {
        res.status(500).json(error.message);
    }
})

router.get('/answers', restricted, (req, res) => {
    Libs.getAnswers()
        .then(answers => {
            console.log("lib answers: ", answers);
            res.status(200).json(answers)
        })
        .catch(error => {
            res.status(500).json(error.message)
        })
})

router.get('/', (req, res) => {
    Libs.getLibs()
        .then(libs => {
            res.status(200).json(libs)
        })
        .catch(err => {
            res.status(500).json(err.message)
        })
});

module.exports = router;
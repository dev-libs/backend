const router = require('express').Router();

const Libs = require('./lib-model.js');
const restricted = require('../auth/auth-middleware.js');

router.get('/play/:id', restricted, async (req, res) => {
    const { id } = req.params;
    try {
        const lib = await Libs.getLibByCategory(id);
        id 
            ? res.status(200).json(lib)
            : res.status(404).json({ error: "no category with given ID found" })
    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports = router;
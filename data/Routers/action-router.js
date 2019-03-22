const express = require('express');

const Actions = require('../helpers/actionModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const actions = await Actions.get(req)
        res.status(200).json(actions)
    } catch (error) {
        res.status(500).json({error: 'Error retrieving actions'})
    }
});


module.exports = router;
const express = require('express');

const Actions = require('../helpers/actionModel');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const actions = await Actions.get()
        res.status(200).json(actions)
    } catch (error) {
        res.status(500).json({error: 'Error retrieving actions'})
    }
});

router.get('/:id', async (req, res) => {
   try {
       const actionId = await Actions.get(req.params.id);
       if (actionId) {
           res.status(200).json(actionId)
       } else {
           res.status(404).json({error: 'Action cannot be found'});
       }
   } catch (error) {
       console.log(error);
       res.status(500).json({error: 'Error retrieving action'})
   }
})


module.exports = router;
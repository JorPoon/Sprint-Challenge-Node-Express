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

router.post('/', async (req, res) => {
    try {
        const addAction = await Actions.insert(req.body);
        if (!req.body.project_id && !req.body.description && !req.body.notes ) {
            res.status(400).json({error: 'Please provide name and description'})
        } else {
            res.status(201).json(addAction);
        } 
    } catch (error) {
        res.status(500).json({error: 'Error adding action'})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deleteAction = await Actions.remove(req.params.id)
        if(deleteAction) {
            res.status(200).json({message: 'Action has been deleted'})
        } else {
            res.status(404).json({error: 'Action cannot be found'})
        }
    } catch (error) {
        res.status(500).json({error: 'Error deleting action'});
    }
})

router.put('/:id', async (req, res) => {
    const changes = req.body;
    try {
        const updateAction = await Actions.update(req.params.id, changes);
        if(updateAction) {
            res.status(200).json(updateAction);
        } else {
            res.status(404).json({error: 'Action cannot be found'})
        }
    } catch (error) {
        res.status(500).json({error: 'Error updating action'})
    }
})


module.exports = router;
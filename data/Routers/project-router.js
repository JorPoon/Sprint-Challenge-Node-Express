const express = require('express');

const Projects = require('../helpers/projectModel');

const router = express.Router();

function testing (req, res, next) {
    if (!req.body.name || !req.body.description){
        res.status(400).json({error: 'Please provide name and description'})
    } else {
        next();
    }
}


router.get('/', async (req, res) => {
    try {
        const projects = await Projects.get()
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({error: 'Error retrieving projects'})
    }
});

router.get('/:id', async (req, res) => {
   try {
       const projectId = await Projects.get(req.params.id);
       if (projectId) {
           res.status(200).json(projectId)
       } else {
           res.status(404).json({error: 'Project cannot be found'});
       }
   } catch (error) {
       console.log(error);
       res.status(500).json({error: 'Error retrieving project'})
   }
})

router.post('/', testing, async (req, res) => {
    try {
        const addProject = await Projects.insert(req.body);
            res.status(201).json(addProject);
    } catch (error) {
        res.status(500).json({error: 'Error adding project'})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deleteProject = await Projects.remove(req.params.id)
        if(deleteProject) {
            res.status(200).json({message: 'Project has been deleted'})
        } else {
            res.status(404).json({error: 'Project cannot be found'})
        }
    } catch (error) {
        res.status(500).json({error: 'Error deleting project'});
    }
})

router.put('/:id', async (req, res) => {
    const changes = req.body;
    try {
        const updateProject = await Projects.update(req.params.id, changes);
        if(updateProject) {
            res.status(200).json(updateProject);
        } else {
            res.status(404).json({error: 'Project cannot be found'})
        }
    } catch (error) {
        res.status(500).json({error: 'Error updating project'})
    }
})


module.exports = router;
import express from 'express';
const router = express.Router();

import { createProject, getProject, getOneProject, deleteProject, updateProject } from '../controllers/project.controller';


router.get('/', getProject);
router.get('/:id', getOneProject);
router.post('/', createProject);
router.delete('/:id', deleteProject)
router.put('/:id', updateProject)



export default router;
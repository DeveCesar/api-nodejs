import express from 'express';
const router = express.Router();

import { createTask, getTask, deleteTask, updateTask, getOneTask, getTaskByProject } from '../controllers/taks.controller';

router.post('/', createTask);
router.get('/', getTask);

/* Eliminar una tarea por ID*/
router.delete('/:id', deleteTask);
/* Actualizar una tarea por ID*/
router.put('/:id', updateTask);

/* Obtener una tarea por ID*/
router.get('/:id', getOneTask);

router.get('/projects/:projectid', getTaskByProject);

export default router;
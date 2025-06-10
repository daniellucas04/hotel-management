// vai definir as rotas para o controller 


import express from 'express';
import { TaskController } from './tasks.controller.js';

const router = express.Router();

router.get('/', TaskController.getAll);
router.get('/:id', TaskController.getById);
router.post('/', TaskController.create);
router.put('/:id', TaskController.update);
router.put('/status/:id', TaskController.updateStatus);
router.delete('/:id', TaskController.remove);

export default router;

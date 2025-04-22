// vai definir as rotas para o controller 


import express from 'express';
import { WorkController } from './workgroups.controller.js';

const router = express.Router();

router.get('/', WorkController.getAll);
router.get('/:id', WorkController.getById);
router.post('/', WorkController.create);
router.put('/:id', WorkController.update);
router.delete('/:id', WorkController.remove);

export default router;

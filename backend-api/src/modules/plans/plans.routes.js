// vai definir as rotas para o controller 


import express from 'express';
import { PlanController } from './plans.controller.js';

const router = express.Router();

router.get('/', PlanController.getAll);
router.get('/:id', PlanController.getById);
router.post('/', PlanController.create);
router.put('/:id', PlanController.update);
router.delete('/:id', PlanController.remove);

export default router;

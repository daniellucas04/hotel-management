// vai definir as rotas para o controller 


import express from 'express';
import { GuestController } from './guests.controller.js';

const router = express.Router();

router.get('/', GuestController.getAll);
router.get('/:id', GuestController.getById);
router.post('/', GuestController.create);
router.put('/:id', GuestController.update);
router.delete('/:id', GuestController.remove);

export default router;

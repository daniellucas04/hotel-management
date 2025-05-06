// vai definir as rotas para o controller 


import express from 'express';
import { GuestController } from './guests.controller.js';
import { upload } from '../../middlewares/upload.js';

const router = express.Router();

router.post('/photo', upload.single('photo'), GuestController.create);
router.get('/', GuestController.getAll);
router.get('/:id', GuestController.getById);
router.post('/', GuestController.create);
router.put('/:id', GuestController.update);
router.delete('/:id', GuestController.remove);

export default router;

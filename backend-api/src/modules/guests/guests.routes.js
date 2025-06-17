// vai definir as rotas para o controller 
import express from 'express';
import { GuestController } from './guests.controller.js';
import { upload } from '../../middlewares/upload.js';

const router = express.Router();

router.get('/', GuestController.getAll);
router.get('/search', GuestController.search);
router.get('/:id', GuestController.getById);
router.post('/', GuestController.create);
router.post('/:id/upload', upload.single('image'), GuestController.upload);
router.put('/:id', GuestController.update);
router.delete('/:id', GuestController.remove);

export default router;

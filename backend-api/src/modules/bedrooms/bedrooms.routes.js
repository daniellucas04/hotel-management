// vai definir as rotas para o controller 


import express from 'express';
import { BedroomController } from './bedrooms.controller.js';
import { upload } from '../../middlewares/upload.js';

const router = express.Router();

router.post('/bedrooms', upload.single('photo'), BedroomController.create);
router.get('/', BedroomController.getAll);
router.get('/:id', BedroomController.getById);
router.post('/', BedroomController.create);
router.put('/:id', BedroomController.update);
router.delete('/:id', BedroomController.remove);

export default router;

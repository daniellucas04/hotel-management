// bedrooms.routes.js
import express from 'express';
import { BedroomController } from './bedrooms.controller.js';
import { upload } from '../../middlewares/upload.js';

const router = express.Router();

// Outras rotas
router.get('/', BedroomController.getAll);
router.get('/:id', BedroomController.getById);
router.post('/', BedroomController.create);
router.post('/:id/uploads', upload.single('image'), BedroomController.upload);
router.put('/:id', BedroomController.update);
router.delete('/:id', BedroomController.remove);

export default router;

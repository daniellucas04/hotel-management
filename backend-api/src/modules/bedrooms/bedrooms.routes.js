// bedrooms.routes.js
import express from 'express';
import multer from 'multer';
import { BedroomController } from './bedrooms.controller.js';

// Configuração do destino e nome do arquivo
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/bedrooms'); // pasta onde as fotos serão salvas
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName);
  }
});

const upload = multer({ storage });

const router = express.Router();

// Rota com upload
router.post('/photo', upload.single('photo'), BedroomController.create);

// Outras rotas
router.get('/', BedroomController.getAll);
router.get('/:id', BedroomController.getById);
router.post('/', BedroomController.create);
router.put('/:id', BedroomController.update);
router.delete('/:id', BedroomController.remove);

export default router;

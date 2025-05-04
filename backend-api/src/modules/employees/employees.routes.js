// vai definir as rotas para o controller 
import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { EmployeeController } from './employees.controller.js'

const uploadDir = path.resolve(process.cwd(), '..frontend/src/public/uploads');

// Garante que o diretório existe
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configuração do multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}.${file.mimetype.split('/')[1]}`;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });
const router = express.Router();

router.get('/', EmployeeController.getAll);
router.get('/:id', EmployeeController.getById);
router.post('/', EmployeeController.create);
router.post('/:id/upload', upload.single('image'), EmployeeController.upload);
router.put('/:id', EmployeeController.update);
router.delete('/:id', EmployeeController.remove);

export default router;

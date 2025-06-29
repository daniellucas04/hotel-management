// vai definir as rotas para o controller 
import express from 'express';
import { EmployeeController } from './employees.controller.js'
import { upload } from '../../middlewares/upload.js'
import { EmployeeService } from './employees.service.js';

const router = express.Router();

router.get('/', EmployeeController.getAll);
router.get('/search', EmployeeController.search);
router.get('/:id', EmployeeController.getById);
router.post('/', EmployeeController.create);
router.post('/:id/uploads', upload.single('image'), EmployeeController.upload);
router.put('/:id', EmployeeController.update);
router.delete('/:id', EmployeeController.remove);

export default router;

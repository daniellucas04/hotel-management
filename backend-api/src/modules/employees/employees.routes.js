// vai definir as rotas para o controller 
import express from 'express';
import { EmployeeController } from './employees.controller.js'
import { upload } from '../../middlewares/upload.js';


const router = express.Router();

router.post('/employees', upload.single('photo'), EmployeeController.create);
router.get('/', EmployeeController.getAll);
router.get('/:id', EmployeeController.getById);
router.post('/', EmployeeController.create);
router.put('/:id', EmployeeController.update);
router.delete('/:id', EmployeeController.remove);

export default router;

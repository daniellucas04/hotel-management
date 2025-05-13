// vai definir as rotas para o controller 
import express from 'express';
import { EmployeeController } from './employees.controller.js'
import { upload } from '../../middlewares/upload.js';

<<<<<<< HEAD
const router = express.Router();

=======

const router = express.Router();

// router.post('/photo', upload.single('photo'), EmployeeController.create);
>>>>>>> 736abc76f7c633f53769987de85ca7469f750e2f
router.get('/', EmployeeController.getAll);
router.get('/:id', EmployeeController.getById);
router.post('/', EmployeeController.create);
router.post('/:id/uploads', upload.single('image'), EmployeeController.upload);
router.put('/:id', EmployeeController.update);
router.delete('/:id', EmployeeController.remove);

export default router;

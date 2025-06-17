// vai definir as rotas para o controller 


import express from 'express';
import { ReservationController } from './reservations.controller.js';

const router = express.Router();

router.get('/', ReservationController.getAll);
router.get('/search', ReservationController.search);
router.get('/:id', ReservationController.getById);
router.post('/', ReservationController.create);
router.put('/:id', ReservationController.update);
router.put('/checkin/:id', ReservationController.updateCheckIn);
router.put('/checkout/:id', ReservationController.updateCheckOut);
router.delete('/:id', ReservationController.remove);

export default router;

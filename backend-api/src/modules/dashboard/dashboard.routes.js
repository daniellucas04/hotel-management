import express from 'express';
import { DashboardController } from './dashboard.controller.js';

const router = express.Router();

router.get('/guests/registred', DashboardController.getGuestsRegistred);
// router.get('/reservas/ativas', DashboardController.getReservationsActive);
// router.get('/quartos/ocupados', DashboardController.getBedroomsOcuppied);
// router.get('/total/checkouts', DashboardController.getTotalCheckouts);
router.get('/', () => 'oi'); //total em dinheiro de tarefas // 

export default router;

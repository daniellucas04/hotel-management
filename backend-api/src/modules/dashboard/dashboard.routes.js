import express from 'express';
import { DashboardController } from './dashboard.controller.js';

const router = express.Router();

router.get('/guests/registred', DashboardController.getGuestsRegistred);
router.get('/reservations/active', DashboardController.getReservationsActive);
router.get('/bedrooms/ocuppied', DashboardController.getBedroomsOcuppied);
router.get('/checkins', DashboardController.getTotalCheckins);
router.get('/money/tasks', DashboardController.getTotalMoneyInTasks);
router.get('/money/reservations', DashboardController.getTotalMoneyInReservations);

export default router;

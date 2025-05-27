import { DashboardService } from './dashboard.service.js';

export const DashboardController = {
    getGuestsRegistred: async (req, res) => {
        const guestsRegistred = await DashboardService.getGuestsRegistred();
        res.json(guestsRegistred);
    },
    
    getReservationsActive: async (req, res) =>  {
        const reservationsActive = await DashboardService.getReservationsActive();
        res.json(reservationsActive);
    },

    getBedroomsOcuppied: async (req, res) =>  {
        const bedroomsOcuppied = await DashboardService.getBedroomsOcuppied();
        res.json(bedroomsOcuppied);
    },

    getTotalCheckins: async (req, res) => {
        const totalCheckouts = await DashboardService.getTotalCheckins();
        res.json(totalCheckouts);
    },

    getTotalMoneyInTasks: async (req, res) =>  {
        const totalMoneyInTasks = await DashboardService.getTotalMoneyInTasks();
        res.json(totalMoneyInTasks);
    },

    getTotalMoneyInReservations: async (req, res) =>  {
        const totalMoneyInReservations = await DashboardService.getTotalMoneyInReservations();
        res.json(totalMoneyInReservations);
    },
};
import { DashboardService } from './dashboard.service.js';

export const DashboardController = {
    getGuestsRegistred: async (req, res) => {
        const guestsRegistred = await DashboardService.getGuestsRegistred();
        res.json(guestsRegistred);
    },
    
    getReservationsActive: (req, res) =>  {
        const reservationsActive = DashboardService.getReservationsActive();
        res.json(reservationsActive);
    },

    getBedroomsOcuppied: (req, res) =>  {
        const bedroomsOcuppied = DashboardService.getBedroomsOcuppied();
        res.json(bedroomsOcuppied);
    },

    getTotalCheckouts: (req, res) => {
        const totalCheckouts = DashboardService.getTotalCheckouts();
        res.json(totalCheckouts);
    },

    getTotalMoneyInTasks: (req, res) =>  {
        const totalMoneyInTasks = DashboardService.getTotalMoneyInTasks();
        res.json(totalMoneyInTasks);
    },
};
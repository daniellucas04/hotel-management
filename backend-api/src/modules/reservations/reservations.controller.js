import {ReservationService} from './reservations.service.js';

// const getAll = async (req, res) => {
//     const plans = await PlanService.getAll();
//     res.json(plans);
// };

export const ReservationController = {
    getAll: async (req, res) => {
        const { page, limit } = req.query;
        const reservations = await ReservationService.getAll(page, limit);
        res.json(reservations);
    },

    getById: async (req, res) => {
        const reservation = await ReservationService.getById(Number(req.params.id));
        res.json(reservation);
    },

    create: async (req, res) => {
        const reservation = await ReservationService.create(req.body);
        res.status(201).json(reservation);
    },

    update: async (req, res) => {
        const reservation = await ReservationService.update(Number(req.params.id), req.body);
        res.json(reservation);
    },

    remove: async (req, res) => {
        await ReservationService.remove(Number(req.params.id));
        res.status(204).send();
    },
};

import BedroomService from './bedrooms.service.js';

// const getAll = async (req, res) => {
//     const plans = await PlanService.getAll();
//     res.json(plans);
// };

export const BedroomController = {
    getAll: async (req, res) => {
        const plans = await BedroomService.getAll();
        res.json(plans);
    },

    getById: async (req, res) => {
        const guest = await BedroomService.getById(Number(req.params.id));
        res.json(guest);
    },

    create: async (req, res) => {
        const guest = await BedroomService.create(req.body);
        res.status(201).json(guest);
    },

    update: async (req, res) => {
        const guest = await BedroomService.update(Number(req.params.id), req.body);
        res.json(guest);
    },

    remove: async (req, res) => {
        await BedroomService.remove(Number(req.params.id));
        res.status(204).send();
    },
};

export default { getAll };

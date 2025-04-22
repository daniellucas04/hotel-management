import PlanService from './plans.service.js';

// const getAll = async (req, res) => {
//     const plans = await PlanService.getAll();
//     res.json(plans);
// };

export const PlanController = {
    getAll: async (req, res) => {
        const plans = await PlanService.getAll();
        res.json(plans);
    },

    getById: async (req, res) => {
        const guest = await PlanService.getById(Number(req.params.id));
        res.json(guest);
    },

    create: async (req, res) => {
        const guest = await PlanService.create(req.body);
        res.status(201).json(guest);
    },

    update: async (req, res) => {
        const guest = await PlanService.update(Number(req.params.id), req.body);
        res.json(guest);
    },

    remove: async (req, res) => {
        await PlanService.remove(Number(req.params.id));
        res.status(204).send();
    },
};




export default { getAll };

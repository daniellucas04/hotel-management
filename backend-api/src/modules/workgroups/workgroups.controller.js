import WorkService from './workgroups.service.js';

// const getAll = async (req, res) => {
//     const plans = await PlanService.getAll();
//     res.json(plans);
// };

export const WorkController = {
    getAll: async (req, res) => {
        const plans = await WorkService.getAll();
        res.json(plans);
    },

    getById: async (req, res) => {
        const guest = await WorkService.getById(Number(req.params.id));
        res.json(guest);
    },

    create: async (req, res) => {
        const guest = await WorkService.create(req.body);
        res.status(201).json(guest);
    },

    update: async (req, res) => {
        const guest = await WorkService.update(Number(req.params.id), req.body);
        res.json(guest);
    },

    remove: async (req, res) => {
        await WorkService.remove(Number(req.params.id));
        res.status(204).send();
    },
};




export default { getAll };

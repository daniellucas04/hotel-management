import {WorkService} from './workgroups.service.js';

// const getAll = async (req, res) => {
//     const plans = await PlanService.getAll();
//     res.json(plans);
// };

export const WorkController = {
    getAll: async (req, res) => {
        const workgroups = await WorkService.getAll();
        res.json(workgroups);
    },

    getById: async (req, res) => {
        const workgroup = await WorkService.getById(Number(req.params.id));
        res.json(workgroup);
    },

    create: async (req, res) => {
        const workgroup = await WorkService.create(req.body);
        res.status(201).json(workgroup);
    },

    update: async (req, res) => {
        const workgroup = await WorkService.update(Number(req.params.id), req.body);
        res.json(workgroup);
    },

    remove: async (req, res) => {
        await WorkService.remove(Number(req.params.id));
        res.status(204).send();
    },
};

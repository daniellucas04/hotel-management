import {TaskService} from './tasks.service.js';

// const getAll = async (req, res) => {
//     const plans = await PlanService.getAll();
//     res.json(plans);
// };

export const TaskController = {
    getAll: async (req, res) => {
        const {page, limit} = req.query;
        const tasks = await TaskService.getAll(page, limit);
        res.json(tasks);
    },

    getById: async (req, res) => {
        const task = await TaskService.getById(Number(req.params.id));
        res.json(task);
    },

    create: async (req, res) => {
        const task = await TaskService.create(req.body);
        res.status(201).json(task);
    },

    update: async (req, res) => {
        const task = await TaskService.update(Number(req.params.id), req.body);
        res.json(task);
    },

    updateStatus: async (req, res) => {
        const task = await TaskService.updateStatus(Number(req.params.id), req.body);
        res.json(task);
    },

    remove: async (req, res) => {
        await TaskService.remove(Number(req.params.id));
        res.status(204).send();
    },
    search: async (req, res) => {
        const {data, page, limit} = req.query;
        const tasks = await TaskService.search(data, page, limit);
        res.json(tasks);
    },
};




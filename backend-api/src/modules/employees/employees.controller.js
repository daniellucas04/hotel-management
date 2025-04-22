
import EmployeeService from './employees.service.js';

// const getAll = async (req, res) => {
//     const plans = await PlanService.getAll();
//     res.json(plans);
// };

export const EmployeeController = {
    getAll: async (req, res) => {
        const plans = await EmployeeService.getAll();
        res.json(plans);
    },

    getById: async (req, res) => {
        const guest = await EmployeeService.getById(Number(req.params.id));
        res.json(guest);
    },

    create: async (req, res) => {
        const guest = await EmployeeService.create(req.body);
        res.status(201).json(guest);
    },

    update: async (req, res) => {
        const guest = await EmployeeService.update(Number(req.params.id), req.body);
        res.json(guest);
    },

    remove: async (req, res) => {
        await EmployeeService.remove(Number(req.params.id));
        res.status(204).send();
    },
};




export default { getAll };


import {EmployeeService} from './employees.service.js';

// const getAll = async (req, res) => {
//     const plans = await PlanService.getAll();
//     res.json(plans);
// };

export const EmployeeController = {
    getAll: async (req, res) => {
        const employees = await EmployeeService.getAll();
        res.json(employees);
    },

    getById: async (req, res) => {
        const employee = await EmployeeService.getById(Number(req.params.id));
        res.json(employee);
    },

    create: async (req, res) => {
        const employee = await EmployeeService.create(req.body);
        res.status(201).json(employee);
    },

    update: async (req, res) => {
        const employee = await EmployeeService.update(Number(req.params.id), req.body);
        res.json(employee);
    },

    remove: async (req, res) => {
        await EmployeeService.remove(Number(req.params.id));
        res.status(204).send();
    },
};



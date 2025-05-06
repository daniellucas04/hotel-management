
import { EmployeeService } from './employees.service.js';

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
        try {
            const data = req.body;

            // Se a foto foi enviada, adiciona ao objeto
            if (req.file) {
                data.photo = `/uploads/${req.file.filename}`;
            }

            const created = await EmployeeService.create(data);
            res.status(201).json(created);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
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



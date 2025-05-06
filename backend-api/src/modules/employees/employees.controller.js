
import { EmployeeService } from './employees.service.js';

// const getAll = async (req, res) => {
//     const plans = await PlanService.getAll();
//     res.json(plans);
// };

export const EmployeeController = {
    getAll: async (req, res) => {
        const {page, limit} = req.query;
        const employees = await EmployeeService.getAll(page, limit);
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

            const created = await GuestService.create(data);
            res.status(201).json(created);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        const employee = await EmployeeService.update(Number(req.params.id), req.body);
        res.json(employee);
    },

    upload: async (req, res) => {
        if (!req.file)
            return res.status(400);

        const image = await EmployeeService.upload(Number(req.params.id), req.file);
        res.json(image);
    },

    remove: async (req, res) => {
        await EmployeeService.remove(Number(req.params.id));
        res.status(204).send();
    },
};



import { BedroomService } from './bedrooms.service.js';

// const getAll = async (req, res) => {
//     const plans = await PlanService.getAll();
//     res.json(plans);
// };

export const BedroomController = {
    getAll: async (req, res) => {
        const bedrooms = await BedroomService.getAll();
        res.json(bedrooms);
    },

    getById: async (req, res) => {
        const bedroom = await BedroomService.getById(Number(req.params.id));
        res.json(bedroom);
    },

    create: async (req, res) => {
        try {
            const data = req.body;

            // Se a foto foi enviada, adiciona ao objeto
            if (req.file) {
                data.photo = `/uploads/${req.file.filename}`;
            }

            const created = await BedroomService.create(data);
            res.status(201).json(created);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        const bedroom = await BedroomService.update(Number(req.params.id), req.body);
        res.json(bedroom);
    },

    remove: async (req, res) => {
        await BedroomService.remove(Number(req.params.id));
        res.status(204).send();
    },
};

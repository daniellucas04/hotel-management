// Aqui vai receber as requisições para usar o guests services


import { GuestService } from './guests.service.js';

export const GuestController = {
    getAll: async (req, res) => {
        const guests = await GuestService.getAll();
        res.json(guests);
    },

    getById: async (req, res) => {
        const guest = await GuestService.getById(Number(req.params.id));
        res.json(guest);
    },

    create: async (req, res) => {
        try {
            const data = req.body;

            // Se a foto foi enviada, adiciona ao objeto
            if (req.file) {
                data.photo = `/uploads/${req.file.filename}`;
            }

            const guest = await GuestService.create(data);
            res.status(201).json(guest);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        const guest = await GuestService.update(Number(req.params.id), req.body);
        res.json(guest);
    },

    remove: async (req, res) => {
        await GuestService.remove(Number(req.params.id));
        res.status(204).send();
    },
};

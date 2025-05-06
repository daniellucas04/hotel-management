// vai ter as regras de negocios 

import { WorkRepository } from './workgroups.repository.js';
import { z } from 'zod';

const WorkShchema = z.object({
    name: z.string().min(3),
});

export const WorkService = {
    getAll: () => WorkRepository.findAll(),
    getById: (id) => WorkRepository.findById(id),
    create: (data) => {
        const parsed = WorkShchema.safeParse(data);
        if (!parsed.success) {
            throw new Error('Validação falhou: ' + parsed.error.errors.map(e => e.message).join(', '));
        }

        return WorkRepository.create(data);
    },
    //testar update
    update: (id, data) => {
        const parsed = WorkShchema.safeParse(data);
        if (!parsed.success) {
            throw new Error('Validação falhou: ' + parsed.error.errors.map(e => e.message).join(', '));
        }

        return WorkRepository.update(id, data);
    },
    remove: (id) => WorkRepository.remove(id),
};

// vai ter as regras de negocios 

import { WorkRepository } from './workgroups.repository.js';
import { z } from 'zod';

const WorkShchema = z.object({
    name: z.string().min(3),
});


class ValidationError extends Error {
    constructor(message, details) {
      super(message);
      this.name = 'ValidationError';
      this.statusCode = 400;
      this.details = details; // Objeto com os erros por campo
    }
  }

export const WorkService = {
    getAll: () => WorkRepository.findAll(),
    getById: (id) => WorkRepository.findById(id),
    create: (data) => {
        const parsed = WorkShchema.safeParse(data);
        if (!parsed.success) {
            const errors = parsed.error.flatten().fieldErrors;
            
            throw new ValidationError('Erro de validação', errors);
          }

        return WorkRepository.create(data);
    },
    //testar update
    update: (id, data) => {
        const parsed = WorkShchema.safeParse(data);
        if (!parsed.success) {
            const errors = parsed.error.flatten().fieldErrors;
            
            throw new ValidationError('Erro de validação', errors);
        }

        return WorkRepository.update(id, data);
    },
    remove: (id) => WorkRepository.remove(id),
};

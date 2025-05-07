// vai ter as regras de negocios 

import { PlanRepository } from './plans.repository.js';
import { z } from 'zod';

const plansSchema = z.object({
  title: z.string()
    .min(3, { message: 'O título deve ter no mínimo 3 caracteres.' })
    .max(100, { message: 'O título deve ter no máximo 100 caracteres.' }),

  description: z.string()
    .min(10, { message: 'A descrição deve ter no mínimo 10 caracteres.' })
    .max(500, { message: 'A descrição deve ter no máximo 500 caracteres.' }),

  price: z.number()
    .gte(0, { message: 'O preço não pode ser negativo.' })
    .max(10000, { message: 'O preço deve ser inferior a 10.000.' }),
});

// Tratamento de erro para o front receber o erro
class ValidationError extends Error {
  constructor(message, details) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
    this.details = details; // Objeto com os erros por campo
  }
}

export const PlanService = {
  getAll: () => PlanRepository.findAll(),
  getById: (id) => PlanRepository.findById(id),
  create: (data) => {
    const parsed = plansSchema.safeParse(data);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      console.log(ValidationError('Error de validação,' + errors))
      throw new ValidationError('Erro de validação', errors);
    }

    return PlanRepository.create(data);
  },
  //testar update
  update: (id, data) => {
    const parsed = plansSchema.safeParse(data);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      console.log(ValidationError('Error de validação,' + errors))
      throw new ValidationError('Erro de validação', errors);
    }

    return PlanRepository.update(id, data);
  },
  remove: (id) => PlanRepository.remove(id),
};

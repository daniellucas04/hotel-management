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

export const PlanService = {
  getAll: () => PlanRepository.findAll(),
  getById: (id) => PlanRepository.findById(id),
  create: (data) => {
    const parsed = plansSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error('Validação falhou: ' + parsed.error.errors.map(e => e.message).join(', '));
    }

    return PlanRepository.create(data);
  },
  //testar update
  update: (id, data) => {
    const parsed = plansSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error('Validação falhou: ' + parsed.error.errors.map(e => e.message).join(', '));
    }

    return PlanRepository.update(id, data);
  },
  remove: (id) => PlanRepository.remove(id),
};

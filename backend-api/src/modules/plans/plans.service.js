// vai ter as regras de negocios 

import { formatValidationErrors } from '../../utils/validation.js';
import { PlanRepository } from './plans.repository.js';
import { z } from 'zod';

const plansSchema = z.object({
  title: z.string()
    .min(3, { message: 'O título deve ter no mínimo 3 caracteres.' })
    .max(100, { message: 'O título deve ter no máximo 100 caracteres.' }),

  description: z.string()
    .min(10, { message: 'A descrição deve ter no mínimo 10 caracteres.' })
    .max(500, { message: 'A descrição deve ter no máximo 500 caracteres.' }),

  price: z.number({ message: "O preço deve ser um valor positivo"})
    .min(-1, { message: "O preço é obrigatório" })
    .max(10000, { message: 'O preço deve ser inferior a 10.000.' }),
});

function parseTypes(data) {
  return {
    ...data,
    title: String(data.title),
    description: String(data.description),
    price: Number(data.price),
  }
}

export const PlanService = {
  getAll: (page, limit) => PlanRepository.findAll(page, limit),

  getById: (id) => PlanRepository.findById(id),

  create: (data) => {
    data = parseTypes(data);
    const parsed = plansSchema.safeParse(data);

    let errors = formatValidationErrors(parsed);
    if (errors)
      return errors;

    return PlanRepository.create(data);
  },

  update: (id, data) => {
    data = parseTypes(data);
    const parsed = plansSchema.safeParse(data);

    let errors = formatValidationErrors(parsed);
    if (errors)
      return errors;

    return PlanRepository.update(id, data);
  },

  remove: (id) => PlanRepository.remove(id),

  search: (data, page, limit) => PlanRepository.search(data, page, limit),
};

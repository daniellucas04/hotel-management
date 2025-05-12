// vai ter as regras de negocios 

import { BedroomRepository } from './bedrooms.repository.js';
import { z } from 'zod';

const BedroomCategory = z.enum(['Solteiro', 'Quarto_casal', 'Duplo_solteiro', 'Dormitório', 'Apartamento']);
const BedroomClassification = z.enum(['Standard', 'Master', 'Deluxe']);
const BedroomStatus = z.enum(['Livre', 'Ocupado', 'Manutenção']);

export const bedroomSchema = z.object({
  number: z.number().int().positive(),
  bathroom_quantity: z.number().gte(0),
  bed_quantity: z.number().gte(0),
  tv_quantity: z.number().gte(0),
  category: BedroomCategory.optional(),
  classification: BedroomClassification.optional(),
  privileges: z.string().optional().nullable(),
  short_description: z.string().min(5, "Descrição muito curta"),
  status: BedroomStatus.optional(),
  photo: z.string().url("Foto precisa ser uma URL válida"),
});

class ValidationError extends Error {
  constructor(message, details) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
    this.details = details; // Objeto com os erros por campo
  }
}

const bedroomUpdateSchema = bedroomSchema.partial();

export const BedroomService = {
  getAll: (page, limit) => BedroomRepository.findAll(page, limit),

  getById: (id) => BedroomRepository.findById(id),

  create: (data) => {
    const parsed = bedroomSchema.safeParse(data);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      console.log(ValidationError('Error de validação,' + errors))
      throw new ValidationError('Erro de validação', errors);
    }

    return BedroomRepository.create(data);
  },

  update: (id, data) => {
    const parsed = bedroomUpdateSchema.safeParse(data);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      console.log(ValidationError('Error de validação,' + errors))
      throw new ValidationError('Erro de validação', errors);
    }

    return BedroomRepository.update(id, data);
  },

  upload: (id, data) => EmployeeRepository.upload(id, data),

  remove: (id) => BedroomRepository.remove(id),
};
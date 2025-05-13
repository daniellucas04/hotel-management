// vai ter as regras de negocios 

import { BedroomRepository } from './bedrooms.repository.js';
import { z } from 'zod';

const BedroomCategory = z.enum(['Solteiro', 'Quarto_casal', 'Duplo_solteiro', 'Dormitório', 'Apartamento']);
const BedroomClassification = z.enum(['Standard', 'Master', 'Deluxe']);
const BedroomStatus = z.enum(['Livre', 'Ocupado', 'Manutenção']);

export const bedroomSchema = z.object({
  number: z.number(),
  bathroom_quantity: z.number(),
  bed_quantity: z.number(),
  tv_quantity: z.number(),
  category: BedroomCategory.optional(),
  classification: BedroomClassification.optional(),
  privileges: z.array().optional().nullable(),
  short_description: z.string().min(5, "Descrição muito curta"),
  status: BedroomStatus.optional(),
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
    // const parsed = bedroomSchema.safeParse(data);
    // console.log(parsed);
    // if (!parsed.success) {
    //   const errors = parsed.error.flatten().fieldErrors;
    //   console.log(errors);
    //   throw new ValidationError('Erro de validação', errors);
    // }

    data = {
      ...data, 
      number: Number(data.number),
      bathroom_quantity: Number(data.bathroom_quantity),
      bed_quantity: Number(data.bed_quantity),
      tv_quantity: Number(data.tv_quantity),
    
    }
    return BedroomRepository.create(data);
  },

  update: (id, data) => {
    const parsed = bedroomUpdateSchema.safeParse(data);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      
      throw new ValidationError('Erro de validação', errors);
    }

    return BedroomRepository.update(id, data);
  },

  upload: (id, data) => BedroomRepository.upload(id, data),

  remove: (id) => BedroomRepository.remove(id),
};
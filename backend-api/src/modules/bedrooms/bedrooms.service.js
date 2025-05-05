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

const bedroomUpdateSchema = bedroomSchema.partial();

export const BedroomService = {
    getAll: () => BedroomRepository.findAll(),

    getById: (id) => BedroomRepository.findById(id),

    create: (data) => {
        const parsed = bedroomSchema.safeParse(data);
        if (!parsed.success) {
            throw new Error('Validação falhou: ' + parsed.error.errors.map(e => e.message).join(', '));
        }

        return BedroomRepository.create(data);
    },

    update: (id, data) => {
        const parsed = bedroomUpdateSchema.safeParse(data);
        if (!parsed.success) {
            throw new Error('Validação falhou: ' + parsed.error.errors.map(e => e.message).join(', '));
        }

        return BedroomRepository.update(id, data);
    },

    remove: (id) => BedroomRepository.remove(id),
};
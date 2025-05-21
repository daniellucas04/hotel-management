import { ReservationRepository } from './reservations.repository.js';
import { BedroomService } from '../bedrooms/bedrooms.service.js';
import { z } from 'zod';

const ReservationStatusEnum = z.enum(['Reservado', 'Confirmado', 'Cancelado']);

// ver o erro que está ao testar reservations
const ReservationSchema = z.object({
  id_guest: z.number()
    .gte(0, { message: "O id do cliente tem que ser existente" }),

  id_bedroom: z.number()
    .gte(0, { message: "O id do quarto tem que ser existente" }),

  check_in: z.date().refine((val) => !isNaN(Date.parse(val)), {
    message: "Data de check-in inválida",
  }),

  check_out: z.date().refine((val) => !isNaN(Date.parse(val)), {
    message: "Data de check-out inválida",
  }),

  status: ReservationStatusEnum.default('Reservado'),

  antecipated_payment: z.boolean().optional(),
});

class ValidationError extends Error {
  constructor(message, details) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
    this.details = details; // Objeto com os erros por campo
  }
}

export const ReservationService = {
  getAll: (page, limit) => ReservationRepository.findAll(page, limit),
  getById: (id) => ReservationRepository.findById(id),

  create: async (data) => {
    data = {
      id_plan: Number(data.id_plan),
      id_bedroom: Number(data.id_bedroom),
      id_guest: Number(data.id_guest),
      check_in: new Date(data.check_in),
      check_out: new Date(data.check_out),
    }
    
    const parsed = ReservationSchema.safeParse(data);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      
      throw new ValidationError('Erro de validação', errors);
    }

    const bedroom = await BedroomService.getById(data.id_bedroom);
    if (!bedroom) {
      throw new ValidationError('Erro de validação', { id_bedroom: ['Quarto não encontrado.'] });
    }
    if (bedroom.status !== 'Livre') {
      throw new ValidationError('Erro de validação', { id_bedroom: ['Quarto não está disponível.'] });
    }

    const createdReservation = await ReservationRepository.create(data);

    // vai atualizar   o status do quarto para "Ocupado"
    await BedroomService.updateBedroomStatus(data.id_bedroom, { status: 'Ocupado' });

    return createdReservation;
  },

  //testar o update

  update: (id, data) => {
    const parsed = ReservationSchema.safeParse(data);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      throw new ValidationError('Erro de validação', errors);
    }
  
    return ReservationRepository.update(id, data);
  },
  
  remove: (id) => ReservationRepository.remove(id),
};

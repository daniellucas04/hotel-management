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

  check_in: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Data de check-in inválida",
  }),

  check_out: z.string().refine((val) => !isNaN(Date.parse(val)), {
    message: "Data de check-out inválida",
  }),

  status: ReservationStatusEnum.default('Reservado'),

  antecipated_payment: z.boolean().optional(),
});

export const ReservationService = {
  getAll: () => ReservationRepository.findAll(),
  getById: (id) => ReservationRepository.findById(id),

  create: async (data) => {
    const parsed = ReservationSchema.safeParse(data);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      const message = Object.entries(errors).map(
        ([field, msgs]) => `${field}: ${msgs.join(', ')}`
      ).join('; ');
      throw new Error("Erro de validação - " + message);
    }

    const bedroom = await BedroomService.getById(data.id_bedroom);
    if (!bedroom) {
      throw new Error('Quarto não encontrado.');
    }

    if (bedroom.status !== 'Livre') {
      throw new Error('Quarto não está disponível.');
    }

    // 2. Cria a reserva
    const createdReservation = await ReservationRepository.create(data);

    // vai atualizar   o status do quarto para "Ocupado"
    await BedroomService.update(data.id_bedroom, { status: 'Ocupado' });

    return createdReservation;
  },

  //testar o update

  update: (id, data) => {
    const parsed = ReservationSchema.safeParse(data);
    if (!parsed.success) {
      throw new Error('Validação falhou: ' + parsed.error.errors.map(e => e.message).join(', '));
    }
    return ReservationRepository.update(id, data);
  },

  remove: (id) => ReservationRepository.remove(id),
};

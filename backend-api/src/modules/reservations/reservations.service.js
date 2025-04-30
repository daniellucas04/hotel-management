import { ReservationRepository } from './reservations.repository.js';
import { z } from 'zod';

const ReservationStatusEnum = z.enum(['Reservado', 'Confirmado', 'Cancelado']);  

// ver o erro que está ao testar reservations
const ReservationSchema = z.object({
  id_guest: z.number()
    .gte(0, { message: "O id do cliente tem que ser existente" }),

  id_bedroom: z.number()
    .gte(0, { message: "O id do quarto tem que ser existente" }),

  check_in: z.date()
    .refine(date => date > new Date(), {
      message: "A data de check-in deve ser no futuro.",
    }),

  check_out: z.date()
    .refine((date, ctx) => {
      if (date <= ctx.parent.check_in) {
        return false;
      }
      return true;
    }, {
      message: "A data de check-out deve ser posterior à data de check-in.",
    }),

  status: ReservationStatusEnum.default('Reservado'), 

  antecipated_payment: z.boolean().optional(),
});

export const ReservationService = {
  getAll: () => ReservationRepository.findAll(),
  getById: (id) => ReservationRepository.findById(id),

  create: (data) => {
    const parsed = ReservationSchema.safeParse(data);
    if (!parsed.success) {
        const errors = parsed.error.flatten().fieldErrors;
        const message = Object.entries(errors).map(
          ([field, msgs]) => `${field}: ${msgs.join(', ')}`
        ).join('; ');
        throw new Error("Erro de validação - " + message);
      }

    return ReservationRepository.create(data);
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

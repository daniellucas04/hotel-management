import { GuestRepository } from './guests.repository.js';
import { z } from 'zod';

const GuestShchema = z.object({
    id_plan: z.number(),
    name: z.string().min(1),
    last_name: z.string().min(1), 
    document: z.string()
      .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
        message: "Documento deve estar no formato xxx.xxx.xxx-xx",
      }),
    birthday: z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: "Data de nascimento inválida",
    }),
    phone1: z.string().min(10),
    phone2: z.string().optional(),
    address: z.string().min(1),
    photo: z.string().optional(),    
  });


export const GuestService = {
    getAll: () => GuestRepository.findAll(),
    getById: (id) => GuestRepository.findById(id),
    create: async (data) => {
        // Validação
        const parsed = GuestShchema.safeParse(data);
        if (!parsed.success) {
          const errors = parsed.error.flatten().fieldErrors;
          const message = Object.entries(errors).map(
            ([field, msgs]) => `${field}: ${msgs.join(', ')}`
          ).join('; ');
          throw new Error("Erro de validação - " + message);
        }
    
        const validData = parsed.data;

        return GuestRepository.create({
          ...validData,
          birthday: new Date(validData.birthday),
        });
      },
    update: (id, data) => GuestRepository.update(id, data),
    remove: (id) => GuestRepository.remove(id),
};

import { GuestRepository } from './guests.repository.js';
import { z } from 'zod';

const GuestShchema = z.object({
  id_plan: z.number(),
  name: z.string().min(1),
  last_name: z.string().min(1),
  // document: z.string()
  //   .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, {
  //     message: "Documento deve estar no formato xxx.xxx.xxx-xx",
  //   }),
  // birthday: z.string().refine((val) => !isNaN(Date.parse(val)), {
  //   message: "Data de nascimento inválida",
  // }),
  phone1: z.string().min(10),
  phone2: z.string().optional(),
  address: z.string().min(1),
  photo: z.string().optional(),
});

export const GuestService = {
  getAll: (page, limit) => GuestRepository.findAll(page, limit),
  getById: (id) => GuestRepository.findById(id),
  create: async (data) => {
    // Validação
    data = {...data, id_plan: Number(data.id_plan)}
    const parsed = GuestShchema.safeParse(data);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      const message = Object.entries(errors).map(
        ([field, msgs]) => `${field}: ${msgs.join(', ')}`
      ).join('; ');
      throw new Error("Erro de validação - " + message);
    }

    // const validData = parsed.data;
    let split = String(data.birthday).split('/');
    let year = split[2];
    let month = split[1];
    let day = split[0];
    data.birthday = new Date(year, month, day);

    return GuestRepository.create(data);
  },

  //fazer o update
  update: (id, data) => GuestRepository.update(id, data),

  upload: (id, data) => GuestRepository.upload(id, data),

  remove: (id) => GuestRepository.remove(id),
};

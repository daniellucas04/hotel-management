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

// Tratamento de erro para o front receber o erro
class ValidationError extends Error {
  constructor(message, details) {
    super(message);
    this.name = 'ValidationError';
    this.statusCode = 400;
    this.details = details; // Objeto com os erros por campo
  }
}

export const GuestService = {
  getAll: (page, limit) => GuestRepository.findAll(page, limit),
  getById: (id) => GuestRepository.findById(id),
  create: async (data) => {
    // Validação
    data = {...data, id_plan: Number(data.id_plan)}
    const parsed = GuestShchema.safeParse(data);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;
      console.log(ValidationError('Error de validação,' + errors))
      throw new ValidationError('Erro de validação', errors);
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
  update: (id, data) => {
    const parsed = GuestShchema.safeParse(data);
    if(!parsed.success){
      const errors = parsed.error.flatten().fieldErrors
      throw new ValidationError('Erro de validação', errors)
    }

    return GuestRepository.update(id, data)

  },

  upload: (id, data) => GuestRepository.upload(id, data),

  remove: (id) => GuestRepository.remove(id),
};

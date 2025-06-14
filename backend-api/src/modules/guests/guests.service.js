import { formatValidationErrors } from '../../utils/validation.js';
import { GuestRepository } from './guests.repository.js';
import { z } from 'zod';

const MIN_DATE = new Date(1900, 0, 1);

const guestShchema = z.object({
  name: z.string().min(1, { message: "O Nome do hóspede é obrigatório" }),
  last_name: z.string().min(1, { message: "O Sobrenome do hóspede é obrigatório" }),
  document: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "CPF inválido" }),
  birthday: z.date().min(MIN_DATE, { message: `Data mínima permitida ${MIN_DATE.toLocaleDateString()}`}),
  phone1: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, "Número de telefone inválido"),
  phone2: z.string().optional(),
  address: z.string().min(1, { message: "O Endereço é obrigatório" }),
  photo: z.string().optional(),
});

function parseTypes(data) {
  return {
    ...data,
    name: String(data.name),
    last_name: String(data.last_name),
    document: String(data.document),
    birthday: new Date(data.birthday),
    phone1: String(data.phone1),
    phone2: String(data.phone2),
    address: String(data.address),
    photo: String(data.photo)
  }
}

export const GuestService = {
  getAll: (page, limit) => GuestRepository.findAll(page, limit),

  getById: (id) => GuestRepository.findById(id),

  create: async (data) => {
    data = parseTypes(data);
    const parsed = guestShchema.safeParse(data);

    let errors = formatValidationErrors(parsed);
    if (errors)
      return errors;

    return GuestRepository.create(data);
  },

  update: (id, data) => {
    data = parseTypes(data);
    const parsed = guestShchema.safeParse(data);

    let errors = formatValidationErrors(parsed);
    if (errors)
      return errors;

    return GuestRepository.update(id, data)
  },

  upload: (id, data) => GuestRepository.upload(id, data),

  remove: (id) => GuestRepository.remove(id),

  search: (data, page, limit) => GuestRepository.search(data, page, limit),
};

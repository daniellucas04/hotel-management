import { formatValidationErrors } from '../../utils/validation.js';
import { BedroomRepository } from './bedrooms.repository.js';
import { z } from 'zod';

const BedroomCategory = z.enum(['Solteiro', 'Quarto_casal', 'Duplo_solteiro', 'Dormitório', 'Apartamento']);
const BedroomClassification = z.enum(['Standard', 'Master', 'Deluxe']);
const BedroomStatus = z.enum(['Livre', 'Ocupado', 'Manutenção']);

export const bedroomSchema = z.object({
  number: z.number({ message: "O número do quarto deve ser numérico" }).min(1, { message: "O número do quarto é obrigatório" }),
  bathroom_quantity: z.number({ message: "A quantidade de banheiros deve ser numérico" }).min(1, { message: "A quantidade de banheiros é obrigatório" }),
  bed_quantity: z.number({ message: "A quantidade de camas deve ser numérico" }).min(1, { message: "A quantidade de camas é obrigatório" }),
  tv_quantity: z.number({ message: "A quantidade de TV's deve ser numérico" }).min(1, { message: "A quantidade de TV's é obrigatório" }),
  category: BedroomCategory.optional(),
  classification: BedroomClassification.optional(),
  short_description: z.string().min(5, "Descrição muito curta"),
  status: BedroomStatus.optional(),
});

function parseTypes(data) {
  return {
    ...data,
    number: Number(data.number),
    bathroom_quantity: Number(data.bathroom_quantity),
    bed_quantity: Number(data.bed_quantity),
    tv_quantity: Number(data.tv_quantity),
    category: String(data.category),
    classification: String(data.classification),
    short_description: String(data.short_description),
    status: String(data.status),
  }
}

export const BedroomService = {
  getAll: (page, limit) => BedroomRepository.findAll(page, limit),

  getById: (id) => BedroomRepository.findById(id),

  create: (data) => {
    data = parseTypes(data);
    const parsed = bedroomSchema.safeParse(data);

    let errors = formatValidationErrors(parsed);
    if (errors)
      return errors;

    return BedroomRepository.create(data);
  },

  update: (id, data) => {
    data = parseTypes(data);
    console.log(data);

    const parsed = bedroomSchema.safeParse(data);
    let errors = formatValidationErrors(parsed);
    if (errors)
      return errors;

    return BedroomRepository.update(id, data);
  },

  updateBedroomStatus: (id, data) => BedroomRepository.updateBedroomStatus(id, data),

  upload: (id, data) => BedroomRepository.upload(id, data),

  remove: (id) => BedroomRepository.remove(id),
};
import { formatValidationErrors } from '../../utils/validation.js';
import { TaskRepository } from './tasks.repository.js';
import { z } from 'zod';

export const taskSchema = z.object({
  id_employee: z.number({ message: "O ID do funcionário deve ser numérico" }).min(1, { message: "O funcionário é obrigatório" }),
  id_reservation: z.number({ message: "O ID da reserva deve ser numérico" }).min(1, { message: "A reserva é obrigatótio" }),
  description: z.string().min(1, { message: "A descrição é obrigatória" }),
  price: z.number({ message: "O preço deve ser um valor positivo" }).min(-1, { message: "O preço é obrigatório" }),
  priority: z.enum(['Baixa', 'Normal', 'Alta', 'Urgente'], { message: "A prioridade é obrigatória" }),
  status: z.enum(['Pendente', 'Em_andamento', 'Finalizado']).optional(),
});

function parseTypes(data) {
  return {
    ...data,
    id_employee: Number(data.id_employee),
    id_reservation: Number(data.id_reservation),
    priority: String(data.priority),
    description: String(data.description),
    price: Number(data.price),
  }
}

export const TaskService = {
  getAll: (page, limit) => TaskRepository.findAll(page, limit),

  getById: (id) => TaskRepository.findById(id),

  create: (data) => {
    data = parseTypes(data);
    const parsed = taskSchema.safeParse(data);

    let errors = formatValidationErrors(parsed);
    if (errors)
      return errors;

    return TaskRepository.create(data);
  },

  update: (id, data) => {
    data = parseTypes(data);
    const parsed = taskSchema.safeParse(data);

    let errors = formatValidationErrors(parsed);
    if (errors)
      return errors;

    return TaskRepository.update(id, data);
  },

  updateStatus: (id, data) => TaskRepository.updateStatus(id, data),

  remove: (id) => TaskRepository.remove(id),
};

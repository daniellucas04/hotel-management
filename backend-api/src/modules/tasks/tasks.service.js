
// vai ter as regras de negocios 

import { TaskRepository } from './tasks.repository.js';
import { z } from 'zod';

export const taskSchema = z.object({
  id_employee: z.number({ message: "O ID do funcionário deve ser numérico" }).min(1, { message: "O funcionário é obrigatório" }),
  id_reservation: z.number({ message: "O ID da reserva deve ser numérico" }).min(1, { message: "A reserva é obrigatótio" }),
  description: z.string().min(1, { message: "A descrição é obrigatório" }),
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
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;

      // Crie um objeto apenas com os campos que possuem erros
      const filteredErrors = Object.keys(errors).reduce((acc, key) => {
        const errorMessages = errors[key];

        if (errorMessages && errorMessages.length > 0) {
          acc.push(errorMessages.join(', ')); // Une múltiplos erros em uma string
        }

        return acc;
      }, []);

      return {
        status: 400,
        errors: filteredErrors,
        message: "Por favor, verifique os dados enviados.",
      }
    }

    return TaskRepository.create(data);
  },
  //testar update
  update: (id, data) => {
    data = {
      ...data,
      price: Number(data.price)
    }
    const parsed = taskSchema.safeParse(data);
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors;

      throw new ValidationError('Erro de validação', errors);
    }

    return TaskRepository.update(id, data);
  },
  remove: (id) => TaskRepository.remove(id),
};

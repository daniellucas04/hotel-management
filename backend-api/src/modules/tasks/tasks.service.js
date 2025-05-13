
// vai ter as regras de negocios 

import { TaskRepository } from './tasks.repository.js';
import { z } from 'zod';
const TaskPriorityEnum = z.enum(['Baixa', 'Normal', 'Alta', 'Urgente']);
const TaskStatusEnum = z.enum(['Pendente', 'Em_andamento', 'Finalizado']);

export const taskSchema = z.object({
    id_employee: z.number({
        required_error: "id_employee é obrigatório",
        invalid_type_error: "id_employee deve ser um número",
    }),

    id_reservation: z.number({
        required_error: "id_reservation é obrigatório",
        invalid_type_error: "id_reservation deve ser um número",
    }),

    priority: TaskPriorityEnum.default('Baixa'),

    description: z.string().min(1, 'Descrição é obrigatória'),

    price: z.number().gte(0, 'O preço não pode ser negativo.'),

    status: TaskStatusEnum.default('Pendente'),
});

class ValidationError extends Error {
    constructor(message, details) {
      super(message);
      this.name = 'ValidationError';
      this.statusCode = 400;
      this.details = details; // Objeto com os erros por campo
    }
  }

export const TaskService = {
    getAll: () => TaskRepository.findAll(),
    getById: (id) => TaskRepository.findById(id),
    create: (data) => {
        const parsed = taskSchema.safeParse(data);
        if (!parsed.success) {
            const errors = parsed.error.flatten().fieldErrors;
            console.log(ValidationError('Error de validação,' + errors))
            throw new ValidationError('Erro de validação', errors);
          }

        return TaskRepository.create(data);
    },
    //testar update
    update: (id, data) => {
        const parsed = taskSchema.safeParse(data);
        if (!parsed.success) {
            const errors = parsed.error.flatten().fieldErrors;
            console.log(ValidationError('Error de validação,' + errors))
            throw new ValidationError('Erro de validação', errors);
          }

        return TaskRepository.update(id, data);
    },
    remove: (id) => TaskRepository.remove(id),
};


// vai ter as regras de negocios 

import { TaskRepository } from './tasks.repository.js';
import { z } from 'zod';

const TaskPriorityEnum = z.enum(['Baixa', 'Média', 'Alta']);
const TaskStatusEnum = z.enum(['Pendente', 'Em andamento', 'Concluída']);

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

export const TaskService = {
    getAll: () => TaskRepository.findAll(),
    getById: (id) => TaskRepository.findById(id),
    create: (data) => {
        const parsed = TaskRepository.safeParse(data);
        if (!parsed.success) {
            throw new Error('Validação falhou: ' + parsed.error.errors.map(e => e.message).join(', '));
        }

        return TaskRepository.create(data);
    },
    //testar update
    update: (id, data) => {
        const parsed = TaskRepository.safeParse(data);
        if (!parsed.success) {
            throw new Error('Validação falhou: ' + parsed.error.errors.map(e => e.message).join(', '));
        }

        return TaskRepository.update(id, data);
    },
    remove: (id) => TaskRepository.remove(id),
};

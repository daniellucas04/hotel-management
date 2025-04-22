
// vai ter as regras de negocios 

import { TaskRepository } from './tasks.repository.js';

export const TaskService = {
    getAll: () => TaskRepository.findAll(),
    getById: (id) => TaskRepository.findById(id),
    create: (data) => TaskRepository.create(data),
    update: (id, data) => TaskRepository.update(id, data),
    remove: (id) => TaskRepository.remove(id),
};

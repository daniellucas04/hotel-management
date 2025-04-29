// vai ter as regras de negocios 

import { WorkRepository } from './workgroups.repository.js';

export const WorkService = {
    getAll: () => WorkRepository.findAll(),
    getById: (id) => WorkRepository.findById(id),
    create: (data) => WorkRepository.create(data),
    update: (id, data) => WorkRepository.update(id, data),
    remove: (id) => WorkRepository.remove(id),
};

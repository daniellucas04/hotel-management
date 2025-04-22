// vai ter as regras de negocios 

import { PlanRepository } from './guests.repository.js';

export const PlanService = {
    getAll: () => PlanRepository.findAll(),
    getById: (id) => PlanRepository.findById(id),
    create: (data) => PlanRepository.create(data),
    update: (id, data) => PlanRepository.update(id, data),
    remove: (id) => PlanRepository.remove(id),
};

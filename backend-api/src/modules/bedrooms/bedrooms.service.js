// vai ter as regras de negocios 

import { BedroomRepository } from './bedrooms.repository.js';

export const BedroomService = {
    getAll: () => BedroomRepository.findAll(),
    getById: (id) => BedroomRepository.findById(id),
    create: (data) => BedroomRepository.create(data),
    update: (id, data) => BedroomRepository.update(id, data),
    remove: (id) => BedroomRepository.remove(id),
};

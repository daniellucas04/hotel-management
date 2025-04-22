// vai ter as regras de negocios 

import { GuestRepository } from './guests.repository.js';

export const GuestService = {
    getAll: () => GuestRepository.findAll(),
    getById: (id) => GuestRepository.findById(id),
    create: (data) => GuestRepository.create(data),
    update: (id, data) => GuestRepository.update(id, data),
    remove: (id) => GuestRepository.remove(id),
};

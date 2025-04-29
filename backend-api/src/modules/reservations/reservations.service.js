// vai ter as regras de negocios 

import { ReservationRepository } from './reservations.repository.js';

export const ReservationService = {
    getAll: () => ReservationRepository.findAll(),
    getById: (id) => ReservationRepository.findById(id),
    create: (data) => ReservationRepository.create(data),
    update: (id, data) => ReservationRepository.update(id, data),
    remove: (id) => ReservationRepository.remove(id),
};

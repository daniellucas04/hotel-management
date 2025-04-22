// vai comunica com o banco de dados pelo prisma

import prisma from '../../config/prisma.js';

export const ReservationRepository = {
    findAll: () => prisma.reservations.findMany(),
    findById: (id) => prisma.reservations.findUnique({ where: { id } }),
    create: (data) => prisma.reservations.create({ data }),
    update: (id, data) => prisma.reservations.update({ where: { id }, data }),
    remove: (id) => prisma.reservations.delete({ where: { id } }),
};

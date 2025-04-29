// vai comunica com o banco de dados pelo prisma

import prisma from '../../config/prisma.js';

export const GuestRepository = {
    findAll: () => prisma.guests.findMany(),
    findById: (id) => prisma.guests.findUnique({ where: { id } }),
    create: (data) => prisma.guests.create({ data }),
    update: (id, data) => prisma.guests.update({ where: { id }, data }),
    remove: (id) => prisma.guests.delete({ where: { id } }),
};

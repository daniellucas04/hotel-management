// vai comunica com o banco de dados pelo prisma

import prisma from '../../config/prisma.js';

export const BedroomRepository = {
    findAll: () => prisma.bedrooms.findMany(),
    findById: (id) => prisma.bedrooms.findUnique({ where: { id } }),
    create: (data) => prisma.bedrooms.create({ data }),
    update: (id, data) => prisma.bedrooms.update({ where: { id }, data }),
    remove: (id) => prisma.bedrooms.delete({ where: { id } }),
};

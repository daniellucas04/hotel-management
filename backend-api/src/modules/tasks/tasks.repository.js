// vai comunica com o banco de dados pelo prisma

import prisma from '../../config/prisma.js';

export const TaskRepository = {
    findAll: () => prisma.tasks.findMany(),
    findById: (id) => prisma.tasks.findUnique({ where: { id } }),
    create: (data) => prisma.tasks.create({ data }),
    update: (id, data) => prisma.tasks.update({ where: { id }, data }),
    remove: (id) => prisma.tasks.delete({ where: { id } }),
};

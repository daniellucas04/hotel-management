// vai comunica com o banco de dados pelo prisma

import prisma from '../../config/prisma.js';

export const WorkRepository = {
    findAll: () => prisma.workgroups.findMany(),
    findById: (id) => prisma.workgroups.findUnique({ where: { id } }),
    create: (data) => prisma.workgroups.create({ data }),
    update: (id, data) => prisma.workgroups.update({ where: { id }, data }),
    remove: (id) => prisma.workgroups.delete({ where: { id } }),
};

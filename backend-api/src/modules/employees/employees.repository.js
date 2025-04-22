// vai comunica com o banco de dados pelo prisma

import prisma from '../../config/prisma.js';

export const EmployeeRepository = {
    findAll: () => prisma.plans.findMany(),
    findById: (id) => prisma.plans.findUnique({ where: { id } }),
    create: (data) => prisma.plans.create({ data }),
    update: (id, data) => prisma.plans.update({ where: { id }, data }),
    remove: (id) => prisma.plans.delete({ where: { id } }),
};

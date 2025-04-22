// vai comunica com o banco de dados pelo prisma

import prisma from '../../config/prisma.js';

export const EmployeeRepository = {
    findAll: () => prisma.employees.findMany(),
    findById: (id) => prisma.employees.findUnique({ where: { id } }),
    create: (data) => prisma.employees.create({ data }),
    update: (id, data) => prisma.employees.update({ where: { id }, data }),
    remove: (id) => prisma.employees.delete({ where: { id } }),
};

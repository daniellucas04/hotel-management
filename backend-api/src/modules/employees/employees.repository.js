// vai comunica com o banco de dados pelo prisma

import prisma from '../../config/prisma.js';

export const EmployeeRepository = {
    findAll: async (page, limit) => {
        let offset = ( page - 1 ) * limit;
        const items = await prisma.employees.findMany({ take: parseInt(limit), skip: offset })
        const totalItems = await prisma.employees.count()

        return {
            data: items,
            total: totalItems
        }
    },
    findById: (id) => prisma.employees.findUnique({ where: { id } }),
    create: (data) => prisma.employees.create({ data }),
    update: async (id, data) => {
        data.id_workgroup = Number(data.id_workgroup);
        await prisma.employees.update({ where: { id }, data })
    },
    upload: async (id, data) => {
        data = {
            photo: data.filename
        };

        await prisma.employees.update({ where: { id }, data })
    },
    remove: (id) => prisma.employees.delete({ where: { id } }),
};

// vai comunica com o banco de dados pelo prisma

import prisma from '../../config/prisma.js';

export const EmployeeRepository = {
    findByLogin: (login) => {
        return prisma.employees.findUnique({ where: { login } });
      },
    findAll: async (page, limit) => {
        if (!page || !limit)
            return await prisma.employees.findMany();

        let offset = ( page - 1 ) * limit;
        const items = await prisma.employees.findMany({ take: parseInt(limit), skip: offset })
        const totalItems = await prisma.employees.count()

        return {
            data: items,
            total: totalItems
        }
    },
    findById: (id) => prisma.employees.findUnique({ where: { id } }),
    create: async (data) => {
        let employee = await prisma.employees.findUnique({ where: {document: data.document } });

        if (employee) {
            return {
                message: 'Documento já cadastrado.',
            }
        }

        return await prisma.employees.create({ data })
    },
    update: async (id, data) => {
        data.id_workgroup = Number(data.id_workgroup);
        data.birthday = new Date(data.birthday);

        let employee = await prisma.employees.findUnique({ where: { document: data.document, NOT: { id: id } }});

        if (employee) {
            return {
                message: 'Documento já cadastrado.',
            }
        }

        return await prisma.employees.update({ where: { id }, data })
    },
    upload: async (id, data) => {
        data = {
            photo: data.filename
        };

        return await prisma.employees.update({ where: { id }, data })
    },
    remove: (id) => prisma.employees.delete({ where: { id } }),
};

// vai comunica com o banco de dados pelo prisma

import prisma from '../../config/prisma.js';

export const GuestRepository = {
    findAll: async (page, limit) => {
        let offset = ( page - 1 ) * limit;
        const items = await prisma.guests.findMany({ take: parseInt(limit), skip: offset, include: { plan: true } })
        const totalItems = await prisma.guests.count()

        return {
            data: items,
            total: totalItems
        }
    },
    findById: (id) => prisma.guests.findUnique({ where: { id } }),
    create: async (data) => {
        let guest = await prisma.guests.findUnique({ where: {document: data.document }});

        if (guest) {
            return {
                message: 'Documento já cadastrado.',
            }
        }

        return await prisma.guests.create({ data })
    },
    update: (id, data) => prisma.guests.update({ where: { id }, data }),
    upload: async (id, data) => {
        console.log(data);
        data = {
            photo: data.filename
        };

        return await prisma.guests.update({ where: { id }, data })
    },
    remove: (id) => prisma.guests.delete({ where: { id } }),
};

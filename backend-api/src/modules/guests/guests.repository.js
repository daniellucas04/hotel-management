// vai comunica com o banco de dados pelo prisma

import prisma from '../../middlewares/prismamiddleware.js';

export const GuestRepository = {
    findAll: async (page, limit) => {
        if (!page || !limit){
            return await prisma.guests.findMany();
        }

        let offset = (page - 1) * limit;
        const items = await prisma.guests.findMany({ take: parseInt(limit), skip: offset })
        const totalItems = await prisma.guests.count()

        return {
            data: items,
            total: totalItems
        }
    },
    findById: (id) => prisma.guests.findUnique({ where: { id } }),
    create: async (data) => {
        let guest = await prisma.guests.findUnique({ where: { document: data.document } });

        if (guest) {
            return {
                status: 400,
                errors: ['Documento já cadastrado'],
                message: "Ocorreu um erro ao cadastrar o hóspede"
            }
        }

        return await prisma.guests.create({ data })
    },
    update: async (id, data) => await prisma.guests.update({ where: { id }, data }),
    upload: async (id, data) => {
        data = {
            photo: data.filename
        };

        return await prisma.guests.update({ where: { id }, data })
    },
    remove: (id) => prisma.guests.delete({ where: { id } }),
    search: async (data, page, limit) => {
        console.log(data)
        let offset = (page - 1) * limit;
        const items = await prisma.guests.findMany({where: {name: {contains: data}},take: parseInt(limit), skip: offset})
        const totalItems = await prisma.guests.count({where: {name: {contains: data}}})

        return {
            data: items,
            total: totalItems
        }
    },
};

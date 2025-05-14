// vai comunica com o banco de dados pelo prisma

import prisma from '../../config/prisma.js';

export const BedroomRepository = {
    findAll: async (page, limit) => {
        let offset = ( page - 1 ) * limit;
        const items = await prisma.bedrooms.findMany({ take: parseInt(limit), skip: offset })
        const totalItems = await prisma.bedrooms.count()

        return {
            data: items,
            total: totalItems
        }
    },
    findById: (id) => prisma.bedrooms.findUnique({ where: { id } }),
    create: async (data) => {
        data = {
            ...data,
            privileges: data.privileges.join(",")
        }

        return await prisma.bedrooms.create({ data })
    },
    update: async (id, data) => {
        data = {
            ...data,
            privileges: data.privileges.join(",")
        }
        return await prisma.bedrooms.update({ where: { id }, data })
    },
    upload: async (id, data) => {
        data = {
            photo: data.filename
        };

        await prisma.bedrooms.update({ where: { id }, data })
    },
    remove: (id) => prisma.bedrooms.delete({ where: { id } }),
};

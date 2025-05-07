// vai comunica com o banco de dados pelo prisma

import prisma from '../../config/prisma.js';

export const PlanRepository = {
    findAll: async (page, limit) => {
        if (!page || !limit){
            return await prisma.plans.findMany();
        }

        let offset = ( page - 1 ) * limit;
        const items = await prisma.plans.findMany({ take: parseInt(limit), skip: offset })
        const totalItems = await prisma.plans.count()

        return {
            data: items,
            total: totalItems
        }

    },
    findById: (id) => prisma.plans.findUnique({ where: { id } }),
    create: (data) => prisma.plans.create({ data }),
    update: (id, data) => prisma.plans.update({ where: { id }, data }),
    remove: (id) => prisma.plans.delete({ where: { id } }),
};

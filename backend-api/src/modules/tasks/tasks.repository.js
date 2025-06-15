// vai comunica com o banco de dados pelo prisma

//import prisma from '../../config/prisma.js';
import prisma from '../../middlewares/prismamiddleware.js'

export const TaskRepository = {
    findAll: async (page, limit) => {
        if (!page || !limit)
            return await prisma.tasks.findMany({ include: { reservation: { include: { bedroom: true } }, employee: true } });
        
        let offset = ( page - 1 ) * limit;
        const items = await prisma.tasks.findMany({ take: parseInt(limit), skip: offset, include: { reservation: { include: { bedroom: true } }, employee: true } })
        const totalItems = await prisma.tasks.count()

        return {
            data: items,
            total: totalItems
        }
    },
    findById: (id) => prisma.tasks.findUnique({ where: { id }, include: { reservation: { include: { bedroom: true } }, employee: true } }),
    create: async (data) => {
        try {
            return prisma.tasks.create({ data })
        } catch {
            return {
                status: 400,
                message: 'Erro ao cadastrar o usuário. Tente novamente',
            }
        }
    },
    update: (id, data) => prisma.tasks.update({ where: { id }, data }),
    updateStatus: (id, data) => prisma.tasks.update({ where: { id }, data }),
    remove: (id) => prisma.tasks.delete({ where: { id } }),
    search: async (data, page, limit) => {
        let offset = ( page - 1 ) * limit;
        const items = await prisma.tasks.findMany({where: {employee: {name: {contains: data}}}, take: parseInt(limit), skip: offset, include: { reservation: { include: { bedroom: true } }, employee: true } })
        const totalItems = await prisma.tasks.count()

        return {
            data: items,
            total: totalItems
        }
    },
};

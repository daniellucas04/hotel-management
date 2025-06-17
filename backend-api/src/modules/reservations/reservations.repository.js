// vai comunica com o banco de dados pelo prisma

//import prisma from '../../config/prisma.js';
import prisma from '../../middlewares/prismamiddleware.js'

export const ReservationRepository = {
    findAll: async (page, limit) => {
        if (!page || !limit)
            return await prisma.reservations.findMany({ include: { bedroom: true, guest: true, plan: true } });
        
        let offset = ( page - 1 ) * limit;
        const items = await prisma.reservations.findMany({ take: parseInt(limit), skip: offset, include: { bedroom: true, guest: true, plan: true } })
        const totalItems = await prisma.reservations.count() 

        return {
            data: items,
            total: totalItems
        }
    },
    findById: (id) => prisma.reservations.findUnique({ where: { id }, include: { bedroom: true, guest: true, plan: true } }),
    create: (data) => prisma.reservations.create({ data }),
    update: (id, data) => prisma.reservations.update({ where: { id }, data }),
    updateCheckIn: async (id) => {
        let data = {
            status_checkin: 'Realizado'
        }

        return await prisma.reservations.update({ where: { id }, data })
    },
    updateCheckOut: async (id) => {
        let data = {
            status_checkout: 'Realizado'
        }

        return await prisma.reservations.update({ where: { id }, data })
    },
    remove: async (id) => {
        let reservation = await prisma.reservations.findUnique({ where: { id }, include: { bedroom: true }});

        await prisma.bedrooms.update({ where: { id: reservation.bedroom.id }, data: { status: 'Livre' }})
        return await prisma.reservations.delete({ where: { id } })
    },
    search: async (data, page, limit) => {
        let offset = ( page - 1 ) * limit;
        const items = await prisma.reservations.findMany({ where: {guest: {name: {contains: data}}},take: parseInt(limit), skip: offset, include: { bedroom: true, guest: true, plan: true } })
        const totalItems = await prisma.reservations.count()  

        return {
            data: items,
            total: totalItems
        }
    },
};

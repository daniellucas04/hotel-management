// prisma/seed.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Verificar se já existe algum workgroup
  const existingWorkgroups = await prisma.workgroups.findMany()
  
  if (existingWorkgroups.length === 0) {
    // Criar os workgroups de exemplo
    await prisma.workgroups.createMany({
      data: [
        { name: 'Admin' },
        { name: 'Recepcionista' },
        { name: 'Gerente de Hotel' },
        { name: 'Camareiro' },
        { name: 'Zelador' },
        { name: 'Cozinheiro' },

      ],
    })

    console.log("Workgroups criados com sucesso!")
  } else {
    console.log("Workgroups já existem.")
  }

  try {
    await prisma.employees.create({
      data: {
        name: "Admin",
        last_name: "Master",
        document: '123.123.123-12',
        birthday: '2004-10-01T00:00:00Z',
        phone1: '1799999999',
        phone2: '',
        photo: '',
        address: 'Rua admin master, 1899',
        login: 'admin',
        email: 'admin@email.com',
        password: '$2b$10$wIQeWKPl8dWQoDw2ecmwAe2vbZTulV5WrK4IXT.kHfogUbAH7nImC',
        workgroup: {
          connect: { id: 1 }
        }
      }
    });

    console.log("Usuário admin criado!");
  } catch (error) {
    console.log("Erro ao criar o usuário Admin: " + error);
  }
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

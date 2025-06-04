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
}

main()
  .catch(e => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

function gtAllUsers() {
  return prisma.user.findMany()
}

function gtUsers(id) {
    return prisma.user.findUnique({where: {id}})
}
  

module.exports = {
gtAllUsers,
gtUsers
};


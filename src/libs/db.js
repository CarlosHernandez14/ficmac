import { PrismaClient, TipoEstudio } from "@prisma/client"

const PrismaClientSigleton = () => {
    return new PrismaClient();
};

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma ?? PrismaClientSigleton();

// Exporta el cliente por defecto y los tipos específicos
export { prisma, TipoEstudio };
export default prisma;

if(process.env.NODE_ENV != "production") globalForPrisma.prisma = prisma;
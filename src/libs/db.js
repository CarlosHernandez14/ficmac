import { PrismaClient, TipoEstudio, Especialidad } from "@prisma/client"

//Declaración de la instancia de Prisma
const PrismaClientSigleton = () => {
    return new PrismaClient();
};

//Instancia de Prisma
const globalForPrisma = globalThis;

//Instancia de Prisma
const prisma = globalForPrisma.prisma ?? PrismaClientSigleton();

export { prisma, TipoEstudio, Especialidad };

export default prisma;

//Verificar si no es producción
if(process.env.NODE_ENV != "production") globalForPrisma.prisma = prisma;
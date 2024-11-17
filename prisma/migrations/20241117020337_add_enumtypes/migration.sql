/*
  Warnings:

  - The `tipo` column on the `Estudio` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `num_celular` on the `Medico` table. All the data in the column will be lost.
  - The `especialidad` column on the `Medico` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `num_celular` on the `Paciente` table. All the data in the column will be lost.
  - You are about to drop the `Usuario` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "TipoEstudio" AS ENUM ('BIOPSIA_LIQUIDA', 'BIOPSIA_SOLIDA');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'PACIENTE', 'MEDICO');

-- CreateEnum
CREATE TYPE "Especialidad" AS ENUM ('MEDICO_GENERAL', 'ONCOLOGO', 'RADIOLOGO', 'PATOLOGO', 'CIRUJANO', 'GINECOLOGO', 'UROLOGO', 'OTRO');

-- DropForeignKey
ALTER TABLE "Account" DROP CONSTRAINT "Account_userId_fkey";

-- DropForeignKey
ALTER TABLE "Donacion" DROP CONSTRAINT "fk_usuario";

-- DropForeignKey
ALTER TABLE "Medico" DROP CONSTRAINT "fk_usuario_medico";

-- DropForeignKey
ALTER TABLE "Paciente" DROP CONSTRAINT "fk_usuario_paciente";

-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "fk_usuario_post";

-- DropForeignKey
ALTER TABLE "Publicacion_Cientifica" DROP CONSTRAINT "fk_usuario_publicacion";

-- DropForeignKey
ALTER TABLE "Solicitud_Estudio" DROP CONSTRAINT "fk_usuario_solicitud";

-- DropForeignKey
ALTER TABLE "Voto" DROP CONSTRAINT "fk_usuario_voto";

-- DropForeignKey
ALTER TABLE "solicitud_resultado" DROP CONSTRAINT "fk_usuario_solicitud_resultado";

-- AlterTable
ALTER TABLE "Estudio" DROP COLUMN "tipo",
ADD COLUMN     "tipo" "TipoEstudio" NOT NULL DEFAULT 'BIOPSIA_LIQUIDA';

-- AlterTable
ALTER TABLE "Medico" DROP COLUMN "num_celular",
DROP COLUMN "especialidad",
ADD COLUMN     "especialidad" "Especialidad" NOT NULL DEFAULT 'MEDICO_GENERAL';

-- AlterTable
ALTER TABLE "Paciente" DROP COLUMN "num_celular";

-- DropTable
DROP TABLE "Usuario";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "password" TEXT,
    "num_celular" TEXT,
    "role" "UserRole" NOT NULL DEFAULT 'PACIENTE',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerificationToken_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PasswordResetToken" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PasswordResetToken_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_email_token_key" ON "VerificationToken"("email", "token");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordResetToken_token_key" ON "PasswordResetToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordResetToken_email_token_key" ON "PasswordResetToken"("email", "token");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donacion" ADD CONSTRAINT "fk_usuario" FOREIGN KEY ("idUsuario") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "fk_usuario_paciente" FOREIGN KEY ("idUsuario") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medico" ADD CONSTRAINT "fk_usuario_medico" FOREIGN KEY ("idUsuario") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Publicacion_Cientifica" ADD CONSTRAINT "fk_usuario_publicacion" FOREIGN KEY ("idUsuario") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "fk_usuario_post" FOREIGN KEY ("idUsuario") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Voto" ADD CONSTRAINT "fk_usuario_voto" FOREIGN KEY ("idUsuario") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solicitud_Estudio" ADD CONSTRAINT "fk_usuario_solicitud" FOREIGN KEY ("idPaciente") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitud_resultado" ADD CONSTRAINT "fk_usuario_solicitud_resultado" FOREIGN KEY ("idMedico") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

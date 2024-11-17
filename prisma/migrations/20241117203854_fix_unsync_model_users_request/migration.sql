/*
  Warnings:

  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Solicitud_Estudio" ADD COLUMN     "idMedico" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "image",
ADD COLUMN     "num_celular" TEXT;

-- AddForeignKey
ALTER TABLE "Solicitud_Estudio" ADD CONSTRAINT "fk_medico_solicitud" FOREIGN KEY ("idMedico") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

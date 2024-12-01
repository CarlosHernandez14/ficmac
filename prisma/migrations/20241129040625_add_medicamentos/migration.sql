/*
  Warnings:

  - You are about to drop the column `imagen_path` on the `Paciente` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "fk_usuario_paciente_inx";

-- AlterTable
ALTER TABLE "Paciente" DROP COLUMN "imagen_path",
ADD COLUMN     "imagen_id" TEXT,
ADD COLUMN     "imagen_url" TEXT;

-- CreateTable
CREATE TABLE "Medicamento" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "efectos_secundarios" TEXT NOT NULL,
    "idTipoCancer" INTEGER NOT NULL,

    CONSTRAINT "Medicamento_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Medicamento" ADD CONSTRAINT "fk_tipo_cancer_medicamento" FOREIGN KEY ("idTipoCancer") REFERENCES "Tipo_Cancer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

/*
  Warnings:

  - The `tipo` column on the `Estudio` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `especialidad` column on the `Medico` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "TipoEstudio" AS ENUM ('BIOPSIA_LIQUIDA', 'BIOPSIA_SOLIDA');

-- CreateEnum
CREATE TYPE "Especialidad" AS ENUM ('MEDICO_GENERAL', 'ONCOLOGO', 'RADIOLOGO', 'PATOLOGO', 'CIRUJANO', 'GINECOLOGO', 'UROLOGO', 'OTRO');

-- AlterTable
ALTER TABLE "Estudio" DROP COLUMN "tipo",
ADD COLUMN     "tipo" "TipoEstudio" NOT NULL DEFAULT 'BIOPSIA_LIQUIDA';

-- AlterTable
ALTER TABLE "Medico" DROP COLUMN "especialidad",
ADD COLUMN     "especialidad" "Especialidad" NOT NULL DEFAULT 'MEDICO_GENERAL';

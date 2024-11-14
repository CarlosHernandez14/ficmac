-- CreateTable
CREATE TABLE "Usuario" (
    "id" SERIAL NOT NULL,
    "correo" TEXT NOT NULL,
    "contrasena" TEXT NOT NULL,
    "rol" INTEGER NOT NULL,
    "fecha_registro" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donacion" (
    "id" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "cantidad" DOUBLE PRECISION NOT NULL,
    "fecha" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Donacion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "nombre_completo" TEXT NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "sexo" TEXT NOT NULL,
    "num_celular" TEXT NOT NULL,
    "imagen_path" TEXT NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Medico" (
    "id" SERIAL NOT NULL,
    "nombre_completo" TEXT NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "rfc" TEXT NOT NULL,
    "matricula" TEXT NOT NULL,
    "num_celular" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,

    CONSTRAINT "Medico_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Publicacion_Cientifica" (
    "id" SERIAL NOT NULL,
    "idUsuario" INTEGER NOT NULL,
    "titulo" TEXT NOT NULL,
    "resumen" TEXT NOT NULL,
    "fecha_publicado" DATE NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Publicacion_Cientifica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pregunta_Frecuente" (
    "id" SERIAL NOT NULL,
    "pregunta" TEXT NOT NULL,
    "respuesta" TEXT NOT NULL,

    CONSTRAINT "Pregunta_Frecuente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Sintoma" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Sintoma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipo_Cancer" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "path_imagen" TEXT NOT NULL,

    CONSTRAINT "Tipo_Cancer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tipo_Cancer_Sintoma" (
    "id" SERIAL NOT NULL,
    "id_sintoma" INTEGER NOT NULL,
    "id_tipo_cancer" INTEGER NOT NULL,

    CONSTRAINT "Tipo_Cancer_Sintoma_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "cuerpo" TEXT NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idUsuario" INTEGER NOT NULL,
    "idPostPadre" INTEGER,
    "idTipoCancer" INTEGER NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Voto" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idUsuario" INTEGER NOT NULL,
    "idPost" INTEGER NOT NULL,

    CONSTRAINT "Voto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estudio" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "tipo" INTEGER NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Estudio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Solicitud_Estudio" (
    "id" SERIAL NOT NULL,
    "idPaciente" INTEGER NOT NULL,
    "idEstudio" INTEGER NOT NULL,
    "path_orden_medica" TEXT NOT NULL,
    "path_identificacion" TEXT NOT NULL,
    "path_concentimiento" TEXT NOT NULL,
    "path_voucher" TEXT NOT NULL,
    "path_historia_clinica" TEXT NOT NULL,
    "path_informe_patologia" TEXT NOT NULL,
    "fecha_solicitud" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Solicitud_Estudio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "solicitud_resultado" (
    "id" SERIAL NOT NULL,
    "idMedico" INTEGER NOT NULL,
    "idTipoCancer" INTEGER NOT NULL,
    "prueba" TEXT NOT NULL,
    "biopsia_remitida" TEXT NOT NULL,
    "path_firma_sello" TEXT NOT NULL,
    "cedula" TEXT NOT NULL,
    "especialidad" TEXT NOT NULL,
    "idSolicitudEstudio" INTEGER NOT NULL,

    CONSTRAINT "solicitud_resultado_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_correo_key" ON "Usuario"("correo");

-- CreateIndex
CREATE INDEX "fk_usuario_inx" ON "Donacion"("idUsuario");

-- CreateIndex
CREATE INDEX "fk_usuario_paciente_inx" ON "Paciente"("idUsuario");

-- CreateIndex
CREATE INDEX "fk_usuario_medico_inx" ON "Medico"("idUsuario");

-- CreateIndex
CREATE INDEX "fk_usuario_publicacion_inx" ON "Publicacion_Cientifica"("idUsuario");

-- CreateIndex
CREATE INDEX "fk_sintoma_inx" ON "Tipo_Cancer_Sintoma"("id_sintoma");

-- CreateIndex
CREATE INDEX "fk_tipo_cancer_inx" ON "Tipo_Cancer_Sintoma"("id_tipo_cancer");

-- CreateIndex
CREATE INDEX "fk_usuario_post_inx" ON "Post"("idUsuario");

-- CreateIndex
CREATE INDEX "fk_post_padre_inx" ON "Post"("idPostPadre");

-- CreateIndex
CREATE INDEX "fk_tipo_cancer_post_inx" ON "Post"("idTipoCancer");

-- CreateIndex
CREATE INDEX "fk_usuario_voto_inx" ON "Voto"("idUsuario");

-- CreateIndex
CREATE INDEX "fk_post_voto_inx" ON "Voto"("idPost");

-- CreateIndex
CREATE INDEX "fk_usuario_solicitud_inx" ON "Solicitud_Estudio"("idPaciente");

-- CreateIndex
CREATE INDEX "fk_estudio_solicitud_inx" ON "Solicitud_Estudio"("idEstudio");

-- CreateIndex
CREATE INDEX "fk_usuario_solicitud_resultado_inx" ON "solicitud_resultado"("idMedico");

-- CreateIndex
CREATE INDEX "fk_tipo_cancer_solicitud_resultado_inx" ON "solicitud_resultado"("idTipoCancer");

-- CreateIndex
CREATE INDEX "fk_solicitud_estudio_solicitud_resultado_inx" ON "solicitud_resultado"("idSolicitudEstudio");

-- AddForeignKey
ALTER TABLE "Donacion" ADD CONSTRAINT "fk_usuario" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Paciente" ADD CONSTRAINT "fk_usuario_paciente" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Medico" ADD CONSTRAINT "fk_usuario_medico" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Publicacion_Cientifica" ADD CONSTRAINT "fk_usuario_publicacion" FOREIGN KEY ("idUsuario") REFERENCES "Medico"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tipo_Cancer_Sintoma" ADD CONSTRAINT "fk_sintoma" FOREIGN KEY ("id_sintoma") REFERENCES "Sintoma"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tipo_Cancer_Sintoma" ADD CONSTRAINT "fk_tipo_cancer" FOREIGN KEY ("id_tipo_cancer") REFERENCES "Tipo_Cancer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "fk_usuario_post" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "fk_post_padre" FOREIGN KEY ("idPostPadre") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "fk_tipo_cancer_post" FOREIGN KEY ("idTipoCancer") REFERENCES "Tipo_Cancer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Voto" ADD CONSTRAINT "fk_usuario_voto" FOREIGN KEY ("idUsuario") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Voto" ADD CONSTRAINT "fk_post_voto" FOREIGN KEY ("idPost") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solicitud_Estudio" ADD CONSTRAINT "fk_usuario_solicitud" FOREIGN KEY ("idPaciente") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solicitud_Estudio" ADD CONSTRAINT "fk_estudio_solicitud" FOREIGN KEY ("idEstudio") REFERENCES "Estudio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitud_resultado" ADD CONSTRAINT "fk_usuario_solicitud_resultado" FOREIGN KEY ("idMedico") REFERENCES "Usuario"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitud_resultado" ADD CONSTRAINT "fk_tipo_cancer_solicitud_resultado" FOREIGN KEY ("idTipoCancer") REFERENCES "Tipo_Cancer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitud_resultado" ADD CONSTRAINT "fk_solicitud_estudio_solicitud_resultado" FOREIGN KEY ("idSolicitudEstudio") REFERENCES "Solicitud_Estudio"("id") ON DELETE CASCADE ON UPDATE CASCADE;

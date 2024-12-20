"use server";
import { google } from "googleapis";
import { Readable } from "stream";
import db from "@/libs/db";
import { auth } from "@/auth";

const oAuth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

const drive = google.drive({
  version: "v3",
  auth: oAuth2Client,
});

// Función para subir archivos a Google Drive, recibe un array de archivos
export const uploadFile = async (fileArray) => {
    console.log("Recibido");
    console.log(fileArray);
    const session = await auth();
    try {
      const fileLinks = await Promise.all(fileArray.map(async (file) => {
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const stream = new Readable();
        stream.push(buffer);
        stream.push(null);
  
        const response = await drive.files.create({
          requestBody: {
            name: file.name,
            mimeType: file.type
          },
          media: {
            mimeType: file.type,
            body: stream
          },
          fields: 'id, name, mimeType' // Solicita el ID, nombre y tipo MIME del archivo en la respuesta
        });
  
        const fileId = response.data.id;
  
        // Configura el archivo como público
        await drive.permissions.create({
          fileId: fileId,
          requestBody: {
            role: 'reader',
            type: 'anyone'
          }
        });
  
        const fileLink = `https://drive.google.com/uc?id=${fileId}&export=download`;
        return fileLink;
      }));
  
      console.log("File links:", fileLinks);
      return { success: "Documentos subidos", links: fileLinks };
    } catch (error) {
      console.error("Error al subir archivos a Google Drive:", error);
      return { error: "Error al subir documentos" };
    }
  };

// Función para obtener los archivos de un usuario, retorna un array con los links de los archivos del usuario logeado
export const getFilesFromUser = async () => {
  const session = await auth();
  let files = [];
  try {
    const documentos = await db.Documento.findMany({
      where: {
        idUsuario: session.user.id,
      },
    });
    for (const documento of documentos) {
      await drive.permissions.create({
        fileId: documento.idDocumento,
        requestBody: {
          role: "reader",
          type: "anyone",
        },
      });
      const result = await drive.files.get({
        fileId: documento.idDocumento,
        fields: "webViewLink, webContentLink",
      });
      files.push(result.data);
      console.log(result.data);
    }
    return { success: "Documentos obtenidos", links: files };
  } catch (error) {
    console.log(error);
    return { error: "Error al obtener documentos" };
  }
};

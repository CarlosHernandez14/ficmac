"use server";
import cloudinary from "./cloudinary.config";


// Funcion para subir una imagen a cloudinary
/*
    Recibe un objeto FormData con las imagenes a subir a Cloudinary

    Retorna un objeto con la siguiente estructura:
    - OK (boolean): Indica si la subida fue exitosa
    - message (string): Mensaje de exito en caso de que la subida sea exitosa
    - data (array): Array con las URL de las imagenes subidas y sus IDs en cada item del array
    - error (string): Mensaje de error en caso de que la subida falle

*/
export const uploadImage = async (formData) => {
    try {
        //console.log("FORM DATA", Object.entries(formData));
        // Subir imagenes a Cloudinary
        // Extraer las partes del FormData manualmente
        // const files = [];
        // for (const [key, value] of Object.entries(formData)) {
        //     if (key === '_streams' || key === 'files') {
        //         files.push(value); // `value` es el buffer del archivo
        //     }
        // }

        const files = formData.getAll("files");

        // Si no hay imagenes se retorna un error
        if (!files || files.length === 0) {
            return {
                OK: false,
                message: "Se requiere subir al menos una imagen",
                error: "Se requiere subir al menos una imagen"
            };
        }

        // Array con las URL de las imagenes subidas y sus IDs en cada item del array
        const uploadedImages = [];

        for (const file of files) {
            let buffer;
            // Verificar si el archivo es un Blob o un Buffer
            if (file.arrayBuffer) {
                // Si es un Blob o File, usa arrayBuffer
                const bytes = await file.arrayBuffer();
                buffer = Buffer.from(bytes);
            } else {
                // Si ya es un Buffer, usa el Buffer directamente
                buffer = file;
            }


            // Subir imagen a Cloudinary
            const cloudinaryResponse = await new Promise((resolve, reject) => {
                cloudinary.uploader.upload_stream({}, (error, result) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }
                }).end(buffer);
            });

            if (!cloudinaryResponse || !cloudinaryResponse.secure_url) {
                // Si no se subio la imagen correctamente retornar un error
                return {
                    OK: false,
                    message: "No se pudo subir la imagen a Cloudinary",
                    error: "No se pudo subir la imagen a Cloudinary"
                };
            }

            // Guardar URL de la imagen subida
            uploadedImages.push({
                secure_url: cloudinaryResponse.secure_url,
                public_id: cloudinaryResponse.public_id
            });


        }

        // Retornar URL de la imagen subida
        return {
            OK: true,
            message: "Imagen subida correctamente",
            data: uploadedImages
        };


    } catch (error) {
        console.error("Error uploading image", error);
        return {
            OK: false,
            message: "Error subiendo imagen a Cloudinary",
            error: error.message
        };
    }
};
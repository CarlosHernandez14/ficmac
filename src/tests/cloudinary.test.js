import { uploadImage } from "@/actions/cloudinary/cloudinary.actions";
import fs from "fs";
import path from "path";
import FormData from "form-data";

describe("Pruebas para el módulo de Cloudinary", () => {
    // Test 1: Prueba para subir una imagen a Cloudinary
    test("Debe subir una imagen a Cloudinary", async () => {
        // Leer la imagen desde el sistema de archivos
        const imagePath = path.join(__dirname, 'Perrito.jpg'); // Ruta relativa a la imagen

        // Crear un objeto FormData
        const formData = new FormData();
        formData.append('files', fs.createReadStream(imagePath)); // 'files' es el nombre esperado en la función


        // Subir la imagen a Cloudinary
        const response = await uploadImage(formData);

        expect(response.OK).toBe(true);
        expect(response.data).toBeInstanceOf(Array);
        expect(response.data[0].secure_url).toBeDefined();
        expect(response.data[0].public_id).toBeDefined();

        console.log('Imagen subida:', result.data[0].secure_url);
    });

    // Test 2: Prueba para manejar errores al subir una imagen a Cloudinary
    test("Debe manejar errores al subir una imagen a Cloudinary", async () => {
        const formData = new FormData();

        const response = await uploadImage(formData);

        expect(response.OK).toBe(false);
        expect(response.error).toBeDefined();
    });

    // Test 3: Prueba para manejar errores al subir una imagen a Cloudinary
    test("Debe manejar errores al subir una imagen a Cloudinary", async () => {
        const formData = new FormData();
        formData.append("files", "test.jpg");

        const response = await uploadImage(formData);

        expect(response.OK).toBe(false);
        expect(response.error).toBeDefined();
    });
});
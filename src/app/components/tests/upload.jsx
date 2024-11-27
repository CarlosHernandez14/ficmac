"use client";
import React from 'react'
import { uploadImage } from '@/actions/cloudinary/cloudinary.actions';

const UploadImage = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);

        const response = await uploadImage(formData);

        if (response.OK) {
            console.log('Imagen subida:', response.data[0].secure_url);
        } else {
            console.error('Error al subir la imagen:', response.error);
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="file" name="files" />
            <button type="submit">Subir imagen</button>
        </form>
    )
}

export default UploadImage;
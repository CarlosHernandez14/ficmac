"use client";

import React, { useState } from "react";
// Actions para enviar correos
import { enviarCorreo } from "@/actions/mail/email.actions";


const MailBtn = () => {


    const [mailResponse, setMailResponse] = useState(null);

    // Btn click handler
    const handleClick = async () => {
        console.log("Mail sent");

        // Send email
        const response = await enviarCorreo();

        // Set response
        setMailResponse(response);

        
    }


    return (
        <div className="flex flex-col justify-center items-center space-y-5">
            <h1 className="text-2xl font-bold"> { mailResponse?.accepted } </h1>
            <button className="w-fit h-fit bg-purple-500 p-10 rounded-lg border-1 border-purple-500 text-white font-bold" onClick={handleClick}>
                Enviar correo
            </button>
        </div>
    );
};

export default MailBtn;

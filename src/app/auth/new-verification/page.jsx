"use client"

import React, { useCallback, useEffect, useState } from 'react'
import {DNA} from "react-loader-spinner"
import { newVerification } from '@/actions/users/new-verification'
import { useSearchParams } from 'next/navigation'
import { BiError } from 'react-icons/bi'
import { FaRegCheckCircle } from 'react-icons/fa'
import {useRouter} from 'next/navigation'

const NewVerificationPage = () => {

    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(null)

    const searchParams = useSearchParams()
    const token = searchParams.get('token')
    const router = useRouter()
    const redirectLogin = () =>{
        router.replace('/auth/login')
    }
    

    const onSubmit = useCallback(() =>{
        if(!token) {
            setError('Token inválido!')
            return
        } 
        newVerification(token)
        .then((response) =>{
            setSuccess(response.success)
            setError(response.error)
        })
        .catch(() =>{
            setError('Error al verificar el correo')
        })
    }, [token])

    useEffect(() => {
        onSubmit()
    },[onSubmit])

    return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className='bg-white w-[450px] rounded-xl flex flex-col justify-center items-center'>
                <p className='text-[#753350] underline text-3xl font-extrabold text-center pt-5 pb-3'>Autenticación</p>
                <p className='text-[#A0737D] text-center pb-5'>Verificando tu correo</p>
                {!success && !error && (
                    <div>
                        <DNA className='pb-5'/>
                        <p className='text-[#A0737D] text text-center pb-5'>Espere un momento...</p>
                    </div>
                )}
                {error && (
                    <div className='text-white text-center p-1 bg-red-500 rounded-xl mb-5 flex justify-between gap-2'>
                        <BiError className='text-2xl ml-2'/>
                        <p className='mr-2'>{error}</p>
                    </div>
                )}
                {success && (
                    <div className='text-white text-center p-1 bg-green-500 rounded-xl mb-5 flex justify-between gap-2'>
                        <FaRegCheckCircle className='text-2xl ml-2'/>
                        <p className='mr-2'>{success}</p>
                    </div>
                )}
                <button onClick={redirectLogin} className=' text-[#753350] rounded-xl p-1 pb-5 w-1/2 hover:underline' >niciar sesión</button>
                
            </div>
        </div>
    )
}

export default NewVerificationPage
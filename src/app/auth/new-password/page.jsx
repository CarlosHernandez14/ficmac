"use client"
import React, { useTransition } from 'react'
import { useSearchParams } from 'next/navigation'
import { newPassword } from '@/actions/users/new-password'
import { useRouter } from 'next/navigation'

const NewPassword = () => {

  const searchParams = useSearchParams()
  const token = searchParams.get('token')
  const [isPending, startTransition] = useTransition()  
  const router = useRouter()

  console.log(token)

  const resetPassword = async () => {
    startTransition(() => {
      newPassword("1234",token).then(
        (response) => {
          if(response.error){
            console.log(response.error)
          }
          if(response.success){
            console.log(response.success)
            router.replace('/auth/login')
          }
        }
      )
    })
  }

  return (
    <div>
      <button onClick={resetPassword}>Reset Password</button>
    </div>
  )
}

export default NewPassword

"use client";
import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { createPaypalOrder } from '@/actions/payments/checkout.actions';

const PaypalBtn = () => {


  // Poder crear una orden de compra
  const handleCreateOrder = async () => {
    const response = await createPaypalOrder();
    if (response.OK) {
      // Order id
      console.log("ORDER ID: ", response.orderID);

      console.log("Response data: ", response.data);
      
      return response.orderID;
    } else {
      console.log("OCURRIO UN ERROR:", response.error);
    }

    return null ;
  }

  // En caso de que el usuario cancele la compra
  const handleCancel = async () => {
    //console.log(data)
  }

  // Cuando el usuario ya pago y se aprobo la compra con el backend 
  const handleApprove = async () => {
    //console.log(data)
  }


  return (
    <div className='w-full h-fit border-none outline-none'>
        <PayPalScriptProvider 
          options={{
            clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,

          }}
        >
            <PayPalButtons
                style={{
                    label: 'pay',
                }}
                createOrder={handleCreateOrder}
            />
        </PayPalScriptProvider>
    </div>
  )
}

export default PaypalBtn;
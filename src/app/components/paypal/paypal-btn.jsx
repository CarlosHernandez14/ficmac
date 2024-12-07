"use client";
import React from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  FUNDING,
} from "@paypal/react-paypal-js";
import { createPaypalOrder } from "@/actions/payments/checkout.actions";
import { createDonacion } from "@/actions/payments/paypal.actions";

const PaypalBtn = ({ valor, descripcion, onApprove }) => {
  // Poder crear una orden de compra
  const handleCreateOrder = async () => {
    const response = await createPaypalOrder({ valor, descripcion });
    if (response.OK) {
      // Order id
      console.log("ORDER ID: ", response.orderID);

      console.log("Response data: ", response.data);

      return response.orderID;
    } else {
      console.log("OCURRIO UN ERROR:", response.error);
    }

    return null;
  };

  // En caso de que el usuario cancele la compra
  const handleCancel = async () => {
    //console.log(data)
  };

  // Cuando el usuario ya pago y se aprobo la compra con el backend
  const handleApprove = async (data, actions) => {
    //console.log(data)
    // Capturamos la orden de compra
    const order = await actions;
  };

  return (
    <div className="px-8">
      <PayPalScriptProvider
        options={{
          clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
        }}
      >
        <PayPalButtons
          style={{
            layout: "vertical",
            color: "gold",
            shape: "rect",
            label: "pay",
            height: 35,
          }}
          fundingSource={FUNDING.PAYPAL}
          createOrder={handleCreateOrder}
          onApprove={(data, actions) => {
            //Llamada a crear la donación
            createDonacion(valor, "cm3usohw20000121ocf73yyvs");
            // Data de la orden de compra
            console.log("Order data: ", data);
            // Captura la orden de compra
            return actions.order.capture().then(() => {
              onApprove();
            });
          }}
          onCancel={(data) => {
            // Recibe el orderID de la orden cancelada
            console.log("Orden cancelada: ", data.orderID);
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default PaypalBtn;

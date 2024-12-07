import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";

function FooterInformacion() {
  return (
    <div className=" ">
      <p className="text-white font-bold text-center">INFORMACIÓN</p>
      <div className="text-center text-white">
        <p>Avenida Tecnológico 1500</p>
        <p>C.P 58120 Morelia, Michoacán</p>
      </div>
      <div className="text-center text-white flex  items-center py-2">
        <FiPhoneCall className="mr-2" />
        <p>(443) 1686 313</p>
        <IoIosMail className=" ml-4 " />
        <p className="mr-2">appcancer@gmail.com</p>
      </div>
    </div>
  );
}

export default FooterInformacion;

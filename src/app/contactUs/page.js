import React from "react";
import Form from "../component/Contact/form";

const Contact = () => {
  return (
    <div className="w-[80%] mx-auto">
      <h1 className="font-lora text-[40px] font-bold border-b-4 border-green-700 inline-block">
        Contact Us
      </h1>
      <div className="w-full m-auto mt-10 h-[130px] rounded-xl bg-summer-org text-white px-4 py-4 flex items-center justify-center">
        <p className="text-3xl font-bold text-center">
          You can also telephone us on +44 1443 402309 or write to us at PONT,
          <br />
          c/o Cartref, Pencerrig Street, Pontypridd CF37 2HS
        </p>
      </div>
      <Form />
    </div>
  );
};

export default Contact;

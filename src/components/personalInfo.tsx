import React, {useState} from "react";
import {Input} from "./form/inputs";

export default function PersonalInformation() {
  return (
    <section className="w-[595px] rounded-[20px] overflow-hidden shadow-[3px_3px_14px_0px_rgba(190,190,190,0.30)]">
      <p className="p-4 bg-[#D0F7FA] w-full font-semibold">
        Personal Information
      </p>
      <fieldset className="divide-y divide-[#C4C4C4] px-5 font-semibold">
        <Input
          type="name"
          id="fName"
          placeholder="Enter your first name"
          label="First Name"
        />
        <Input
          type="name"
          id="lName"
          placeholder="Enter your last name"
          label="Last Name"
        />
        <Input
          type="email"
          id="email"
          placeholder="Enter your email"
          label="Email"
        />
      </fieldset>
    </section>
  );
}

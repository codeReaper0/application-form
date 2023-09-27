import React, {useState} from "react";

export default function PersonalInformation() {
  return (
    <section className="w-[595px] rounded-[20px] overflow-hidden shadow-[3px_3px_14px_0px_rgba(190,190,190,0.30)]">
      <p className="p-4 bg-[#D0F7FA] w-full text-lg font-semibold">
        Personal Information
      </p>
      <fieldset className="divide-y divide-[#C4C4C4]">
        <div className="">
          <label htmlFor=""></label>
          <input type="name" id="" placeholder="Enter your first name" />
        </div>
      </fieldset>
    </section>
  );
}

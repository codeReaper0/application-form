import React from "react";

export default function Stepper() {
  return (
    <>
      <button className="bg-green-900 text-white rounded-md flex gap-1 items-center text-xs py-3 px-6 ml-auto font-semibold mb-8">
        Save & continue
      </button>
      <ol className="rounded-lg shadow-[0px_1px_18px_0px_rgba(0,0,0,0.12)] grid grid-cols-4">
        <li className="py-8 text-center">Program Details</li>
        <div className="relative">
          <li className="py-8 text-center bg-green-900 text-white font-medium">
            Application Form
          </li>
          <div className="flex items-center absolute inset-y-0 -right-2 rotate-[45deg]">
            <div className="w-5 h-5  bg-green-900" />
          </div>
        </div>
        <li className="py-8 text-center">Workflow</li>
        <li className="py-8 text-center">Preview</li>
      </ol>
    </>
  );
}

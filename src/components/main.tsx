import React from "react";
import Stepper from "./stepper";
import Upload from "./upload";
import PersonalInformation from "./personalInfo";

export default function Main() {
  return (
    <main className="p-10 w-full overflow-y-auto">
      <form>
        {/* Form Stepper */}
        <Stepper />
        <div className="p-10 space-y-8">
          <Upload />
          <PersonalInformation />
        </div>
      </form>
    </main>
  );
}

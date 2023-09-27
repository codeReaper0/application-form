import React from "react";
import Sidebar from "./components/sidebar";
import Main from "./components/main";

function App() {
  return (
    <div className="font-poppins bg-white w-full h-screen overflow-hidden flex">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;

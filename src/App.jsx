import { useEffect, useState } from "react";
import Gallery from "./components/Gallery/Gallery";
import Tab from "./components/Tab/Tab";

function App() {
  return (
    <div className="flex gap-14 text-white px-8 py-10 bg-custom-gradient min-h-screen h-screen">
      <div className="flex bg-[#616161]/[.82] w-[50%] justify-self-center rounded-3xl" />
      <div className="flex flex-col gap-3 self-stretch w-2/4 items-center">
        <Tab />
        <div className="custom-horizontal-line" />
        <Gallery />
        <div className="custom-horizontal-line" />
      </div>
    </div>
  );
}

export default App;

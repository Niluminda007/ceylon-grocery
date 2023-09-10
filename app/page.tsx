import CategoryArea from "@/components/CategoryArea";
import Header from "@/components/Header";
import React from "react";

const App = () => {
  return (
    <div className="w-full h-full bg-[#000000] flex flex-col items-center sm:mt-20 mt-6">
      <Header />
      <CategoryArea />
    </div>
  );
};

export default App;

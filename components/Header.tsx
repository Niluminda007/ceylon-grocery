import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full h-[200px] bg-transparent flex justify-center sm:gap-4 relative sm:static">
      <Image
        src="/assets/logo.png"
        className="object-contain h-[120px] w-[120px]"
        width={120}
        height={120}
        alt="brand"
      />
      <div className="flex flex-col justify-center  sm:justify-normal">
        <p className="text-white sm:text-[2.75rem] text-[2rem] font-normal">
          Ceylon Grocery
        </p>
        <p className="w-full flex justify-center text-[#5BFB23] sm:text-[2.75rem] text-[2rem] font-normal  sm:static sm:translate-x-0 sm:left-0 absolute top-[100%] left-[50%] -translate-x-[50%]">
          Price List
        </p>
      </div>
    </div>
  );
};

export default Header;

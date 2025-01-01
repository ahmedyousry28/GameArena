import React from "react";
import { BiLoaderCircle } from "react-icons/bi";

const Spinner = () => {
  return (
    <div className=" flex items-center justify-center h-screen">
      <BiLoaderCircle className=" text-rose-400 m-auto   w-20 h-20 text-center animate-spin " />
    </div>
  );
};

export default Spinner;

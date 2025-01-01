import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link className=" font-semibold  my-2 text-xl lg:text-2xl flex" href={"/"}>
      <span>Game</span>
      <h1 className="  text-rose-500">Arena</h1>
    </Link>
  );
};

export default Logo;

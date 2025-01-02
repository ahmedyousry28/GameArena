"use client";
import NavBar from "@/components/shared/Header/NavBar";
import SideBar from "@/components/shared/sidebar/SideBar";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [toggleMenu, setToggleMenu] = React.useState(true);
  return (
    <div className="grid grid-cols-12">
      <SideBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <div className="max-w-[1375px] w-full  px-5 md:px-10 lg:px-20 col-span-full lg:col-span-10 ">
        <NavBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
        {children}
      </div>
    </div>
  );
};

export default MainLayout;

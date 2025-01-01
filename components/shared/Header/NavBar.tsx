"use client";
import React from "react";
import Search from "./Search";
import User from "@/components/User";
import SkeletonCustom from "@/components/SkeletonCustom";
import { useGetUser } from "@/lib/queryFunctions";
import ButtonGame from "@/components/defaults/ButtonGame";
import Logo from "../Logo";
import { Menu, ShieldCloseIcon, X } from "lucide-react";
interface IProps {
  toggleMenu: boolean;
  setToggleMenu: (value: boolean) => void;
}
const NavBar = ({ toggleMenu, setToggleMenu }: IProps) => {
  const { user, isLoading } = useGetUser();
  return (
    <nav>
      <header className="flex flex-col ">
        <div className="flex justify-between items-center">
          <div className="flex items-center lg:hidden">
            {toggleMenu ? (
              <Menu
                className="mr-2 cursor-pointer"
                onClick={() => setToggleMenu(false)}
              />
            ) : (
              <X
                className="mr-2 cursor-pointer"
                onClick={() => setToggleMenu(true)}
              />
            )}
            <Logo />
          </div>
          <div className=" hidden mx-2 md:block w-[60%]">
            <Search />
          </div>
          {isLoading ? (
            <SkeletonCustom circle />
          ) : user?.data ? (
            <User user={user.data} />
          ) : (
            <div className=" flex items-center gap-2">
              <ButtonGame
                link="/login"
                text="Login"
                className=" p-0 gap-0 ml-0"
              />
              <ButtonGame link="/signup" text="SignUp" />
            </div>
          )}
        </div>
        <div className="block md:hidden mt-2 w-full">
          <Search />
        </div>
      </header>
    </nav>
  );
};
export default NavBar;

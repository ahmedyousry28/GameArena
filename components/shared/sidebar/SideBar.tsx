"use client";
import React from "react";
import { useGetUser } from "@/lib/queryFunctions";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import Logo from "@/components/shared/Logo";
import NavLink from "./SideLink";
import { NAV_LINKS } from "@/data";
import { logout } from "@/actions/auth";
const SideBar = ({
  toggleMenu,
  setToggleMenu,
}: {
  toggleMenu: boolean;
  setToggleMenu?: (value: boolean) => void;
}) => {
  const { user, isLoading } = useGetUser();
  const queryClient = useQueryClient();
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden lg:block lg:col-span-2">
        <div className="py-5 px-10 h-screen sticky inset-0 flex flex-col items-start bg-black/30 text-gray-50">
          <Logo />
          {NAV_LINKS.map((navLink, i: number) => (
            <NavLink key={i} navLink={navLink} />
          ))}
          {isLoading ? (
            <div className="mt-auto">
              <Skeleton className="h-4 w-[130px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          ) : user?.data ? (
            <div className="mt-auto">
              <Button
                onClick={async () => {
                  const res = await logout();
                  if (res.success) {
                    toast.success(res.success);
                    queryClient.invalidateQueries({ queryKey: ["user"] });
                  } else toast.error(res.error);
                }}
                variant={"destructive"}
              >
                Logout
              </Button>
            </div>
          ) : null}
        </div>
      </div>

      {/* Mobile Sidebar Overlay - Full width with black background */}
      {!toggleMenu && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black text-gray-50">
          <div className="h-screen flex flex-col">
            {/* Header with Logo and X icon */}
            <div className="flex justify-between items-center px-5 pt-7 pb-4">
              <Logo />
              <X
                className="cursor-pointer w-6 h-6"
                onClick={() => setToggleMenu?.(true)}
              />
            </div>

            {/* Sidebar Content */}
            <div className="flex-1 px-10 flex flex-col">
              {NAV_LINKS.map((navLink, i: number) => (
                <NavLink key={i} navLink={navLink} />
              ))}
              {isLoading ? (
                <div className="mt-auto">
                  <Skeleton className="h-4 w-[130px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
              ) : user?.data ? (
                <div className="mt-auto">
                  <Button
                    onClick={async () => {
                      const res = await logout();
                      if (res.success) {
                        toast.success(res.success);
                        queryClient.invalidateQueries({ queryKey: ["user"] });
                      } else toast.error(res.error);
                    }}
                    variant={"destructive"}
                  >
                    Logout
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default SideBar;

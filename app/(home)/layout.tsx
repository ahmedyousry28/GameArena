"use client";
import React from "react";
import { WishlistProvider } from "@/context/wishlistContext";
import MainLayout from "@/layout/MainLayout";
import GridContainer from "@/components/defaults/GridContainer";
import SideBar from "@/components/shared/sidebar/SideBar";
import MaxWidthWrapper from "@/components/defaults/MaxWidthWrapper";
import NavBar from "@/components/shared/Header/NavBar";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [toggleMenu, setToggleMenu] = React.useState(true);

  return (
    //     <WishlistProvider>
    //       <main className="dark  background grid  min-h-screen h-full">
    //         {/* <ButtonGradient /> */}
    //         <MainLayout>{children}</MainLayout>
    //       </main>
    //     </WishlistProvider>
    <WishlistProvider>
      <main className="dark  background grid  min-h-screen h-full">
        <GridContainer cols={12}>
          <SideBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
          <MaxWidthWrapper className="  col-span-full lg:col-span-10">
            <NavBar toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />{" "}
            {children}
          </MaxWidthWrapper>
        </GridContainer>
      </main>
    </WishlistProvider>
  );
}

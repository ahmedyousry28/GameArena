import { WishlistProvider } from "@/context/wishlistContext";
import MainLayout from "@/layout/MainLayout";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WishlistProvider>
      <main className="dark  background grid  min-h-screen h-full">
        {/* <ButtonGradient /> */}
        <MainLayout>{children}</MainLayout>
      </main>
    </WishlistProvider>
  );
}

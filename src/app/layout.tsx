import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./lib/providers";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <Providers>
        <body className="bg-light-text4 dark:bg-dark-background">
          <div className="flex flex-row justify-center gap-8 bg-light-american_blue dark:bg-dark-black_howl py-5 items-center h-56 rounded-t-lg">
            <Header />
          </div>
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers/ChakraUIProvider";
import ReactQueryProvider from "@/components/providers/ReactQueryProvider";
import { StateProvider } from "@/components/providers/AppContextProvider";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body>
        <ReactQueryProvider>
          <StateProvider>
            <Providers>{children}</Providers>
          </StateProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}

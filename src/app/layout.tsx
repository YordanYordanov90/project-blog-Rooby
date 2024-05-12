import type { Metadata } from "next";
import { inter } from "@/app/ui/fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Rooby-project",
  description: "My project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

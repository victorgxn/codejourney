import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const font = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cursos en línea | Codejourney",
  description: "Codejourney es una tienda virtual de aprendizaje y enseñanza en línea. Mejora tus conocimientos de programación, marketing, ciencias de la información y mucho más.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
    <html lang="en">
      <body className={`${font.className} bg-gray-50 min-h-screen`}>{children}</body>
    </html>
      </ClerkProvider>
  );
}

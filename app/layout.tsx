import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fisioterapeuta Roser Sabater Moll",
  description:
    "Roser Sabater Moll - Fisioterapeuta especialista en rehabilitación deportiva, Rehabilitación del suelo pélvico, Uroginecológica, Fisioterapia invasiva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}

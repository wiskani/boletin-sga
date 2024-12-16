import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const adca = localFont({
    src: "./fonts/Adca.woff",
    variable: "--font-adca",
    display: 'swap',
})
const tahu = localFont({
    src: "./fonts/Tahu.woff",
    variable: "--font-tahu",
    display: 'swap',
})

const stemLight = localFont({
  src: "./fonts/StemExtraLight.woff",
  variable: "--font-stem-ligth",
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Boletín del SGA",
  description: "Boletín del Sistema de Gestión Ambiental",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          `${geistSans.variable}
          ${geistMono.variable}
          ${adca.variable}
          ${tahu.variable}
          ${stemLight.variable}`
        }
      >
        {children}
      </body>
    </html>
  );
}

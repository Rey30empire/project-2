import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Esta es la importación de tus estilos combinados

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Remodelación de primera categoría LLC",
  description: "Servicios de handyman, instalación de duchas y tinas en un solo día.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

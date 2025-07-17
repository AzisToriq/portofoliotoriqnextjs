import Image from "next/image";
import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "@/app/styles/globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Toriq Ganteng | Portfolio",
  description: "Portofolio Azis Toriq Maulana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fontSans.variable}>
        {/* Contoh header logo */}
        <header style={{ padding: "10px", display: "flex", alignItems: "center" }}>
          <Image
            src="/toriq.jpg"
            alt="Logo Toriq"
            width={50}
            height={50}
            priority
          />
          <h1 style={{ marginLeft: "10px" }}>Toriq Ganteng</h1>
        </header>

        {/* Konten utama */}
        {children}
      </body>
    </html>
  );
}

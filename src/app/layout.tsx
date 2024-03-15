import type { Metadata } from "next";
import "./globals.css";
import App from "./page";




export const metadata: Metadata = {
  title: "CarlosJr Dev Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        <App/>
      </body>
    </html>
  );
}

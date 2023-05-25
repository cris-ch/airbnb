import "./globals.css";
import { Inter, Nunito } from "next/font/google";
import NavBar from "./components/navbar/NavBar";
import ClientOnly from "./components/ClientOnly";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "APlus BnB",
  description: "APlus BnB is a new way to travel and stay in style.",
};

const font = Nunito({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <NavBar />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";
import ContextProvider from "@/context/ContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AfriChat ai app",
  description:
    "AfriChat ai app provides a genarative chat interface and a chatbot for your questions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}

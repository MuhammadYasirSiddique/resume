import "./globals.css";
import { personalinfo } from "@/data/mydata";
import Navbar from "./components/navbar";

export const metadata = {
  title: "Yasir",
  description: "Resume",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

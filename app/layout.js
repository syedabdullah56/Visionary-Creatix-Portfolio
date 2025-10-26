import "./globals.css";
import Navbar from "../components/Navbar";
import { Poppins } from "next/font/google";

// ✅ Optimized Google Font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Visionary Creatix | Digital Agency",
  description:
    "Visionary Creatix is a modern digital agency providing web development, branding, and creative solutions to help businesses grow online.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-gradient-to-b from-black via-[#030b2a] to-[#000814] text-white`}>
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>{children}</main>

         
       
      </body>
    </html>
  );
}
        
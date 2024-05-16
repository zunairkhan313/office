import Footer from "./Components/Footer";
import FooterTop from "./Components/FooterTop";
import NavScrollExample from "./Components/Navbar";
import NavbarScrollExample from "./Components/Navbar1";
import Top from "./Components/TopButton";
import { AuthProvider } from "./Provider";
import "./globals.css";
import { Inter } from "next/font/google";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {

  title: "Songchuan",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <NavScrollExample />
          <NavbarScrollExample />
          <Top />
          {children}
          <FooterTop/>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
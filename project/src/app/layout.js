import "./globals.css";
// COMPONENTS
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
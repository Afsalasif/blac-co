// app/developers/layout.tsx
import Navbar from "../components/Navbar"; // Adjust import path as necessary
import Footer from "../components/Footer"; // Adjust import path as necessary

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;

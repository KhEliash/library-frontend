import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="  ">
      <Navbar />
       <Toaster richColors position="top-center" />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router-dom";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Toaster richColors position="top-center" />
      <main className="flex-1 bg-gray-50 p-3">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;

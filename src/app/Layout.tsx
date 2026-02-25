import { Outlet } from "react-router";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";

export function Layout() {
  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

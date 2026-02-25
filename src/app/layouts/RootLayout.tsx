import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation";
import { ChatForm } from "../components/ChatForm";

export function RootLayout() {
  return (
    <div className="dark min-h-screen bg-[#0a0a1f] text-white antialiased">
      <Navigation />
      <Outlet />
      <ChatForm />
    </div>
  );
}

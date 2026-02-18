import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";  // ← correct file
// import NotFound from "./pages/NotFound"; // if you have one

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* other routes */}
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

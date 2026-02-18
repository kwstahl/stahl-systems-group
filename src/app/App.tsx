import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { StarterHubShowcase } from "./pages/StarterHubShowcase";
import { BusinessHubShowcase } from "./pages/BusinessHubShowcase";
import { EnterpriseHubShowcase } from "./pages/EnterpriseHubShowcase";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/starter-hub" element={<StarterHubShowcase />} />
      <Route path="/business-hub" element={<BusinessHubShowcase />} />
      <Route path="/enterprise-hub" element={<EnterpriseHubShowcase />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
}

// src/app/routes.tsx
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import {StarterHubShowcase} from "./pages/StarterHubShowcase";
import {BusinessHubShowcase} from "./pages/BusinessHubShowcase";
import {EnterpriseHubShowcase} from "./pages/EnterpriseHubShowcase";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/starter-hub", element: <StarterHubShowcase /> },
  { path: "/business-hub", element: <BusinessHubShowcase /> },
  { path: "/enterprise-hub", element: <EnterpriseHubShowcase /> },
]);

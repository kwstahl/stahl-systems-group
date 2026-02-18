import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { HomePage } from "./pages/HomePage";
import { StarterHubShowcase } from "./pages/StarterHubShowcase";
import { BusinessHubShowcase } from "./pages/BusinessHubShowcase";
import { EnterpriseHubShowcase } from "./pages/EnterpriseHubShowcase";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "starter-hub", element: <StarterHubShowcase /> },
      { path: "business-hub", element: <BusinessHubShowcase /> },
      { path: "enterprise-hub", element: <EnterpriseHubShowcase /> },
    ],
  },
]);

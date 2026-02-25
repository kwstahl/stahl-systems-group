import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";

import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { LabPage } from "./pages/LabPage";
import { JournalPage } from "./pages/JournalPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: HomePage },
      { path: "products", Component: ProductsPage },
      { path: "lab", Component: LabPage },
      { path: "journal", Component: JournalPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
    ],
  },
]);
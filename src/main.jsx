import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./context/UserContext.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./Routes/MainPage.jsx";
import AcervoCompleto from "./Routes/AcervoCompleto.jsx";
import PoliticaCookiesPage from "./Routes/PoliticaCookiesPage.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/Acervo",
        element: <AcervoCompleto />,
      },
      {
        path: "/PoliticaCookies",
        element: <PoliticaCookiesPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </UserProvider>
);

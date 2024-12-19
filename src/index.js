import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Analytics } from "@vercel/analytics/react";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage.js";
import NotFoundPage from "./pages/NotFound/NotFoundPage.js";
import AboutMePage from "./pages/AboutMe/AboutMePage.js";
import CvPage from "./pages/Cv/CvPage.js";
import PersonalProjectsPage from "./pages/PersonalProjects/PersonalProjectsPage.js";
import ContactPage from "./pages/Contact/ContactPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about-me",
    element: <AboutMePage />,
  },
  {
    path: "/cv",
    element: <CvPage />,
  },
  {
    path: "/personal-projects",
    element: <PersonalProjectsPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
    <Analytics />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

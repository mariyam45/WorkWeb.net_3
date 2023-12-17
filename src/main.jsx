import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppliedJob from "./components/AppliedJob/AppliedJob.jsx";
import Blogs from "./components/Blogs/Blogs.jsx";
import JobDetails from "./components/JobDetails/JobDetails.jsx";
import MainPage from "./components/MainPage/MainPage.jsx";
import Root from "./components/Root/Root.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <MainPage></MainPage>,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "/details/:id",
        element: <JobDetails></JobDetails>,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/applied",
        element: <AppliedJob />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

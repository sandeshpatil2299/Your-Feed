import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import CreateFeed from './pages/CreateFeed.jsx';
import Feed from './pages/Feed.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateFeed />,
  },
  {
    path: "/feed",
    element: <Feed />,
  }
]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);

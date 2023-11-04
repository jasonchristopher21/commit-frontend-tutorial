import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'

import GossipBox from "./components/games/GossipBox.jsx";
import RandomCatFact from "./components/games/RandomCatFact.jsx";

// import statements

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/gossipbox",
    element: <GossipBox />,
  },
  {
    path: "/catfact",
    element: <RandomCatFact />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

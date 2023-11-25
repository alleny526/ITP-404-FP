import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/Root";
import Index from "./routes/Index";
import Details from "./routes/Details";
import DetailsCharacter from "./routes/DetailsCharacter";
import Result from "./Result";

import "bootstrap/dist/css/bootstrap.css";
import MyCollection from "./routes/MyCollection";

const baseUrl = "http://localhost:5000";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Index />,
        loader() {
          return fetch("https://api.bgm.tv/calendar").then((response) => {
            return response.json();
          });
        },
      },
      {
        path: "/animes/:id",
        element: <Details />,
        loader({ params }) {
          return fetch(`https://api.bgm.tv/v0/subjects/${params.id}`).then(
            (response) => {
              return response.json();
            }
          );
        },
      },
      {
        path: "/animes/result",
        element: <Result />,
      },
      {
        path: "/mycollection",
        element: <MyCollection />,
        loader() {
          return fetch(`${baseUrl}/bookmarks`).then((response) => {
            return response.json();
          });
        },
      },
      {
        path: "/characters/:id",
        element: <DetailsCharacter />,
        loader({ params }) {
          return fetch(`https://api.bgm.tv/v0/characters/${params.id}`).then(
            (response) => {
              return response.json();
            }
          );
        },
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

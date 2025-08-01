import { createBrowserRouter } from "react-router-dom";
import App from "./app/App";
import CreateBook from "./app/books/createBook/CreateBook";
import Home from "./app/home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/create-book",
        element: <CreateBook />,
      },
    ],
  },
]);

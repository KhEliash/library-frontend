import { createBrowserRouter } from "react-router-dom";
import App from "./app/App";
import CreateBook from "./app/books/create/CreateBook";
import Home from "./app/home/Home";
import AllBooks from "./app/books/allBooks/AllBooks";
import BorrowBookForm from "./app/pages/BorrowBookForm";
import BorrowSummary from "./app/pages/BorrowSummary";
import BookDetails from "./app/books/details/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/create-book",
        element: <CreateBook />,
      },
      {
        path: "/books",
        element: <AllBooks />,
      },
      {
        path: "/borrow/:id",
        element: <BorrowBookForm />,
      },
      {
        path: "/borrow-summary",
        element: <BorrowSummary />,
      },
      {
        path: "/book/:id",
        element: <BookDetails />,
      },
    ],
  },
]);

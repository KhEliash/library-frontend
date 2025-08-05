import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-6 sticky top-0 z-50 ">
      <div className="w-full flex justify-between">
        <Link to="/">🏠</Link>
        <div className="flex gap-2 md:gap-4">
          <Link to="/books" className="hover:text-gray-300">
            All Books
          </Link>
          <Link to="/create-book" className="hover:text-gray-300">
            Add Book
          </Link>
          <Link to="/borrow-summary" className="hover:text-gray-300">
            Summary
          </Link>
        </div>
      </div>
    </nav>
  );
}

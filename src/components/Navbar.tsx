// Navbar.tsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-6">
      <Link to="/books">All Books</Link>
      <Link to="/create-book">Add Book</Link>
    </nav>
  );
}

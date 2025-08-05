export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t mt-10">
      <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
        {/* About Section */}
        <div>
          <h4 className="font-semibold mb-2 text-gray-800">About Library</h4>
          <p>
            Minimal Library is a digital library management system to help
            manage books, borrowers, and transactions efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-2 text-gray-800">Quick Links</h4>
          <ul className="space-y-1">
            <li>
              <a href="/books" className="hover:underline">
                Browse Books
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Borrowed Books
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Add a Book
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact / Info */}
        <div>
          <h4 className="font-semibold mb-2 text-gray-800">Contact</h4>
          <p>Email: support@minimalibrary.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Address: 123 Book St, Readville, USA</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs py-4 border-t">
        &copy; {new Date().getFullYear()} Minimal Library. All rights reserved.
      </div>
    </footer>
  );
}

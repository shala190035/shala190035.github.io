import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="UrTimeFlow" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-semibold text-gray-800">UrTimeFlow</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Home</Link>
            <Link to="/categories" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">Categories</Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md">About</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
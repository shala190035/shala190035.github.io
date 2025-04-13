import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  return (
    <div className="max-w-2xl mx-auto">
      <div className="relative flex items-center">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for services or businesses..."
          className="w-full px-4 py-3 rounded-2xl shadow-lg border-0 focus:ring-2 focus:ring-blue-500"
        />
        <button className="absolute right-3 text-gray-400 hover:text-blue-500">
          <FiSearch size={20} />
        </button>
      </div>
    </div>
  );
}
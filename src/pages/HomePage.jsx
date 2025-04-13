import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import CategoryGrid from '../components/CategoryGrid';
import BusinessList from '../components/BusinessList';

function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
          UrTimeFlow
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Book appointments with local businesses in Gleisdorf
        </p>
        <SearchBar onSearch={setSearchQuery} />
      </section>
      
      <CategoryGrid />
      <BusinessList searchQuery={searchQuery} />
    </div>
  );
}

export default HomePage;

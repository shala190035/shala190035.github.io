import SearchBar from '../components/SearchBar';
import CategoryGrid from '../components/CategoryGrid';
import BusinessList from '../components/BusinessList';

export default function Home() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-50 to-mint-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Services in Gleisdorf
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Your central platform for local service appointments
          </p>
          <SearchBar />
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Categories</h2>
        <CategoryGrid />
      </div>

      {/* Businesses Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Local Businesses</h2>
        <BusinessList />
      </div>
    </div>
  );
}
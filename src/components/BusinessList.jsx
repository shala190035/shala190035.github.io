import { Link } from 'react-router-dom';

const businesses = [
  {
    id: 1,
    name: "Style Studio",
    description: "Premium hair salon with expert stylists",
    category: "Hair & Beauty",
    imageUrl: "https://placekitten.com/200/200" // Placeholder image
  },
  {
    id: 2,
    name: "Zen Spa",
    description: "Relaxing massage and wellness treatments",
    category: "Wellness",
    imageUrl: "https://placekitten.com/201/201"
  },
  {
    id: 3,
    name: "AutoCare Plus",
    description: "Professional auto repair and maintenance",
    category: "Auto Service",
    imageUrl: "https://placekitten.com/202/202"
  }
];

export default function BusinessList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {businesses.map((business) => (
        <div key={business.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img 
            src={business.imageUrl} 
            alt={business.name} 
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900">{business.name}</h3>
              <p className="text-sm text-blue-600">{business.category}</p>
            </div>
            <p className="text-gray-600 mb-4">{business.description}</p>
            <Link 
              to={`/business/${business.id}`}
              className="block w-full text-center bg-blue-600 text-white py-2 px-4 rounded-xl hover:bg-blue-700 transition-colors duration-300"
            >
              View Appointments
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
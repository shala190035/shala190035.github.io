import { Link } from 'react-router-dom';

const businesses = [
  {
    id: 1,
    name: "Style Studio",
    description: "Premium hair salon with expert stylists",
    logo: "/logos/style-studio.png",
    category: "Hair & Beauty"
  },
  {
    id: 2,
    name: "Zen Spa",
    description: "Relaxing massage and wellness treatments",
    logo: "/logos/zen-spa.png",
    category: "Wellness"
  },
  {
    id: 3,
    name: "AutoCare Plus",
    description: "Professional auto repair and maintenance",
    logo: "/logos/autocare.png",
    category: "Auto Service"
  }
];

export default function BusinessList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {businesses.map((business) => (
        <div key={business.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <div className="p-6">
            <div className="flex items-center mb-4">
              <img 
                src={business.logo} 
                alt={business.name}
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">{business.name}</h3>
                <p className="text-sm text-blue-600">{business.category}</p>
              </div>
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
import { FiScissors, FiHeart, FiTruck, FiActivity } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const categories = [
  { id: 1, name: 'Hair & Beauty', icon: FiScissors, color: 'bg-pink-100 text-pink-600' },
  { id: 2, name: 'Wellness', icon: FiHeart, color: 'bg-blue-100 text-blue-600' },
  { id: 3, name: 'Auto Service', icon: FiTruck, color: 'bg-yellow-100 text-yellow-600' },
  { id: 4, name: 'Health', icon: FiActivity, color: 'bg-green-100 text-green-600' },
];

export default function CategoryGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/category/${category.id}`}
          className="group"
        >
          <div className="flex flex-col items-center p-6 rounded-2xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <div className={`p-4 rounded-xl ${category.color} mb-4`}>
              <category.icon size={24} />
            </div>
            <h3 className="text-gray-900 font-medium text-lg">{category.name}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}
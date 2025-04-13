import { useParams } from 'react-router-dom';
import { useState } from 'react';

const services = {
  1: [
    { id: 1, name: "Haircut", duration: "45 min", price: "€35" },
    { id: 2, name: "Color", duration: "120 min", price: "€85" },
    { id: 3, name: "Styling", duration: "30 min", price: "€25" }
  ]
};

export default function BusinessDetail() {
  const { id } = useParams();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
        <div className="flex items-center mb-6">
          <img 
            src="/logos/style-studio.png"
            alt="Business Logo"
            className="w-16 h-16 rounded-xl object-cover"
          />
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-900">Style Studio</h1>
            <p className="text-gray-600">Premium hair salon with expert stylists</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Services List */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Available Services</h2>
            <div className="space-y-4">
              {services[id]?.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`w-full p-4 rounded-xl border transition-all ${
                    selectedService?.id === service.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-medium">{service.name}</h3>
                      <p className="text-sm text-gray-500">{service.duration}</p>
                    </div>
                    <span className="font-semibold">{service.price}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Calendar View */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Select Date & Time</h2>
            <div className="bg-gray-50 p-4 rounded-xl">
              {/* Calendar component would go here */}
              <div className="text-center p-4">
                <p>Calendar implementation required</p>
              </div>
              
              {selectedService && (
                <button
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors duration-300 mt-4"
                >
                  Book Appointment
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
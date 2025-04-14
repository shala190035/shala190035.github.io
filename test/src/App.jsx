import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <header className="flex flex-col items-center justify-center py-10">
        <img src="/BigLogoWithName.png" alt="UrTimeFlow Logo" className="w-48 h-auto" />
        <h1 className="text-2xl font-bold mt-4">Your central booking platform for services in Gleisdorf</h1>
      </header>

      <main className="px-4">
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Search for services..."
            className="w-full max-w-md p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-4">Service Categories</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white text-black rounded-lg shadow-md hover:shadow-lg">
              <span className="text-2xl">💇‍♀️</span>
              <p>Hair & Beauty</p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg shadow-md hover:shadow-lg">
              <span className="text-2xl">🧖‍♂️</span>
              <p>Wellness</p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg shadow-md hover:shadow-lg">
              <span className="text-2xl">🚗</span>
              <p>Auto Service</p>
            </div>
            <div className="p-4 bg-white text-black rounded-lg shadow-md hover:shadow-lg">
              <span className="text-2xl">🏥</span>
              <p>Health Care</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Local Businesses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((business) => (
              <div key={business} className="p-4 bg-white text-black rounded-lg shadow-md hover:shadow-lg">
                <img src="/Logo.png" alt="Business Logo" className="w-12 h-12 mb-2" />
                <h3 className="font-bold">Business Name {business}</h3>
                <p className="text-sm">Description of the business and services offered.</p>
                <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  View Appointments
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

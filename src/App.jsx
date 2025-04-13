import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BusinessPage from './pages/BusinessPage';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/business/:id" element={<BusinessPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

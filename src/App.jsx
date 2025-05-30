import React from 'react'; // Removed Suspense and lazy
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoadingIndicator from './components/LoadingIndicator'; // Kept for now, may be used elsewhere
import { SpeedInsights } from "@vercel/speed-insights/react";
// Standard direct imports for page components
import Home from './pages/Home';
import MenuPage from './pages/MenuPage';
import EventsPage from './pages/EventsPage';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      {/* Removed Suspense wrapper */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/events" element={<EventsPage />} />
        {/* Additional routes can be added here as the application grows */}
      </Routes>
      <SpeedInsights />
    </Router>
  );
}

export default App;

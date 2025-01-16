import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Visualizations from './pages/Visualizations';
import Tutorials from './pages/Tutorials';
import TutorialDetails from './pages/TutorialDetails';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/visualizations" element={<Visualizations />} />
            <Route path="/tutorials" element={<Tutorials />} />
            <Route path="/tutorials/:tutorialId" element={<TutorialDetails />} />
          </Routes>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
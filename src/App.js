import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage';
import DarkSoulsI from './trackers/DarkSoulsI/DarkSoulsI';
import DarkSoulsII from './trackers/DarkSoulsII/DarkSoulsII';
import DarkSoulsIII from './trackers/DarkSoulsIII/DarkSoulsIII';
import Sekiro from './trackers/Sekiro/Sekiro';
import LiesOfP from './trackers/LiesOfP/LiesOfP';
import EldenRing from './trackers/EldenRing/EldenRing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/dark-souls-i" element={<DarkSoulsI />} />
        <Route path="/dark-souls-ii" element={<DarkSoulsII />} />
        <Route path="/dark-souls-iii" element={<DarkSoulsIII />} />
        <Route path="/sekiro" element={<Sekiro />} />
        <Route path="/lies-of-p" element={<LiesOfP />} />
        <Route path="/elden-ring" element={<EldenRing />} />
      </Routes>
    </Router>
  );
}

export default App;

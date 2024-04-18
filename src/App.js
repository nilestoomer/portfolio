import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Landing from './Screens/Landing/Landing.jsx'
import ProjectDetail from './Screens/ProjectDetail/ProjectDetail.jsx'
import Projects from './Screens/Projects/Projects.jsx'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </div>
  );
}

export default App;

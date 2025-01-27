import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import Overview from './pages/Overview';

const App = () => {

  return (
    <div className='bg-[#1e1e1e] text-[#FFF] w-full min-h-[100vh]'>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </div>
  );
};

export default App;

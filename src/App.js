import React from 'react';

import './App.css';
import Headers from './components/Headers'
import Home from './components/Home';

function App() {
  return (
    <div className="font-serif text-[#393c41] overflow-x-hidden  ">
      <Headers/>
      <Home/>

    </div>
  );
}

export default App;

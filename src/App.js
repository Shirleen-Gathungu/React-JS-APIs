import React from 'react';
import './App.css';
import Soko from './components/Soko';
import Fruits from './components/Fruits';
import Veggies from './components/Veggies';
function App() {
  return (
    <div className="App">
      <Soko/>
     <Fruits/>
     <Veggies/>
    </div>
  );
}

export default App;

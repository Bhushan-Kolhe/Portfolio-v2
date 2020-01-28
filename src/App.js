import React from 'react';
import { useState } from 'react';
import Loader from './Components/Loader/Loader';
import HomePage from './Components/HomePage/HomePage';
import './App.css';

function App() {
  const [ Loaded, setLoaded ] = useState(false);
  /*
  setTimeout( () => {
    setLoaded(true)
  },
  5100 )
  */
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;

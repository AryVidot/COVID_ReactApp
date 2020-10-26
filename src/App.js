import React from 'react';
import './App.scss';
import CountryCount from './components/CountryCount';
import Header from "./components/Header";
import WorldCount from "./components/WorldCount";
function App() {
  return (
    <div className="App">
      <Header />
      <WorldCount />
      <CountryCount />
    </div>
  );
}

export default App;

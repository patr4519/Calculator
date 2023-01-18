import React from 'react';
import './App.css';
import { Calculator } from './Components/Calculator';
import { Header } from './Components/Header';
import { Footer } from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <Calculator />
      <Footer />
    </>
  );
}

export default App;

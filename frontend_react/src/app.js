import React from 'react';

import { About, Footer, Header, Classes, Skills } from './container';
import { Navbar } from './components';
import './App.scss'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Classes />
      <Skills />
      <Footer />
    </div>
  );
}

export default App
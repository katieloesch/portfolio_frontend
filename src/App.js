import React, { useRef } from 'react';
import { About, Footer, Header, Skills, Work } from './components';
import { NavBar, NavDots } from './components/Nav';
import { CurrentContext } from './contexts/CurrentContext';

import './App.scss'

const App = () => {

  const active = useRef('home');


  return (
    <div className='app' >
      <CurrentContext.Provider value={{active}} >
      <NavBar />
      <Header />
      <Skills />
      <Work />
      <About />
      <Footer />
      <NavDots />
      </CurrentContext.Provider>
    </div>
  );
}

export default App;
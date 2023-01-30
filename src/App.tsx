import React from 'react';
import { Menu } from './components/Menu/Menu';
import { Router } from './features/Router/Router';

import './variables.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <Router />
    </div>
  );
}

export default App;

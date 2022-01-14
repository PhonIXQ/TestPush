// import logo from './logo.svg';
import React from 'react';
import Aside from './components/aside/Aside';
import Header from './containers/header/Header';
import Article from './containers/article/Article';

import './App.css';

function App() {
  return (
    <div className="App">
      <Aside />
      <Header />
      <div className="main">
        <Article />
      </div>
    </div>
  );
}

export default App;

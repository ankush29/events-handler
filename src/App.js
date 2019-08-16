import React from 'react';

import './App.scss';
import './chrome-tabs.scss';

import Content from './content.js'

function App() {
  return (
    <div className="App">
      <h1 className='App-header'>Events Viewer</h1>
      <Content/>
    </div>
  );
}

export default App;

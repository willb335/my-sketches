import React from 'react';
import Table from './Table';
import Legend from './Legend';

import '@zendeskgarden/react-tables/dist/styles.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Legend />
      <Table />
    </div>
  );
}

export default App;

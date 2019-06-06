import React from 'react';
import Table from './Table';
import Legend from './Legend';
import Shape from './Shapes';

import '@zendeskgarden/react-tables/dist/styles.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Shape
        type="rectangle"
        specs={
          (10,
            10,
            100,
            100,
            {
              fill: '#ff0065',
              fillStyle: 'solid' // solid fill
            })
        }
      />
      <Shape type="elipse" />
      <Shape type="line" />
      <Shape type="circle" />

      <Legend />
      <Table />
    </div>
  );
}

export default App;

import React from 'react';
import styled from 'styled-components';
import Shape from './Shapes';

import '@zendeskgarden/react-tables/dist/styles.css';
import './App.css';

function App() {
  return (
    <ShapesContainer className="App">
      <Shape
        type="rectangle"
        specs={{
          x: 10,
          y: 10,
          width: 100,
          height: 100,
          options: { fill: 'purple', fillStyle: 'solid' }
        }}
      />
      <Shape
        type="elipse"
        specs={{
          x: 50,
          y: 50,
          width: 100,
          height: 100,
          options: { fill: 'gold', fillStyle: 'solid' }
        }}
      />
      <Shape
        type="line"
        specs={{
          x1: 0,
          x2: 300,
          y1: 120,
          y2: 100,
          options: { stroke: 'blue', fillStyle: 'solid', strokeWidth: 10 }
        }}
      />
      <Shape
        type="circle"
        specs={{
          centerX: 110,
          centerY: 120,
          diameter: 50,
          options: {
            fill: 'green',
            hachureAngle: 60, // angle of hachure,
            hachureGap: 2
          }
        }}
      />
    </ShapesContainer>
  );
}

export default App;

/* --------------------------- Start Styles --------------------------------- */

const ShapesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

/* --------------------------- End Styles ----------------------------------- */

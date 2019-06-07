import React from 'react';
import styled from 'styled-components';
import Buddha from './Buddha';

import '@zendeskgarden/react-tables/dist/styles.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>Shapes and Stuff, check back</div>
      <Buddha />
    </div>
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

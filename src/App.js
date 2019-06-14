import React from 'react';
import styled from 'styled-components';
import Buddha2 from './Buddha2';
import Buddha1 from './Buddha';

import HandlebarPanel from './HandlebarPanel';

function App() {
  return (
    <Container>
      <Buddha1 />
      <Buddha2 />
    </Container>
  );
}

export default App;

/* --------------------------- Start Styles --------------------------------- */

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-family: 'Mali', cursive;
  font-size: 30px;
  color: black;
  width: 100vw;
  height: 100vh;
  background-color: lightskyblue;
`;

/* --------------------------- End Styles ----------------------------------- */

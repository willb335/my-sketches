import React from 'react';
import styled from 'styled-components';
import Buddha from './Buddha';



function App() {
  return (
    <Container>
      <div>Rough SVG's</div>
      <Buddha />
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
  font-weight: bold;
  color: black;
  width: 100vw;
  background-color: skyblue;
`;

/* --------------------------- End Styles ----------------------------------- */

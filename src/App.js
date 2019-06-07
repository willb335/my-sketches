import React from 'react';
import styled from 'styled-components';
import Buddha from './Buddha';



function App() {
  return (
    <Container>
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
  color: black;
  width: 100vw;
  height: 100vh;
  background-color: skyblue;
`;

/* --------------------------- End Styles ----------------------------------- */

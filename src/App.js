import React from 'react';
import styled from 'styled-components';
import Buddha from './Buddha';
import BuddhaLotus from './BuddhaLotus';
import { Spring } from 'react-spring/renderprops';

function App() {
  return (
    <Container>
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => (
          <>
            <Buddha styles={props} />
            <BuddhaLotus styles={props} />
          </>
        )}
      </Spring>
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

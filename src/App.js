import React from 'react';
import styled from 'styled-components';
import Buddha from './Buddha';
import BuddhaLotus from './BuddhaLotus';
import BuddhaLean from './BuddhaLean';
import { Spring } from 'react-spring/renderprops';

function App() {
  return (
    <Container>
      <Spring
        from={{ opacity: 0, transform: 'scale(0.95)' }}
        to={{ opacity: 1, transform: 'scale(0.95)' }}
      >
        {props => (
          <>
            <BuddhaLotus styles={props} size={{ height: 500, width: 500 }} />
            <Buddha styles={props} size={{ height: 500, width: 500 }} />
            <BuddhaLean styles={props} size={{ height: 500, width: 500 }} />
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

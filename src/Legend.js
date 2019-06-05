import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Table,
  Caption,
  Head,
  HeaderRow,
  HeaderCell,
  Body,
  Row,
  Cell
} from '@zendeskgarden/react-tables';

class RoughLegend extends Component {
  render() {
    return (
      <StyledTable>
        <StyledCaption>Song Legend</StyledCaption>
        <Head>
          <HeaderRow>
            <HeaderCell width="20%">Super Cool</HeaderCell>
            <HeaderCell width="20%">Cool</HeaderCell>
            <HeaderCell width="20%">Middle</HeaderCell>
            <HeaderCell width="20%">Hot</HeaderCell>
            <HeaderCell width="20%">Super Hot</HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          <Row>
            <Cell width="20%">////////</Cell>
            <Cell width="20%">/////////</Cell>
            <Cell width="20%">/////////</Cell>
            <Cell width="20%">////////</Cell>
            <Cell width="20%">////////</Cell>
          </Row>
        </Body>
      </StyledTable>
    );
  }
}

export default RoughLegend;

/* --------------------------- Start Styles --------------------------------- */

const StyledTable = styled(Table)`
  max-width: 500px;
  max-height: 400px;
`;

const StyledCaption = styled(Caption)`
  margin: 10px;
  font-weight: bold;
  color: purple;
`;

/* --------------------------- End Styles --------------------------------- */

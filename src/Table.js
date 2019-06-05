/* ----- Rough Table ------ */
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

class RoughTable extends Component {
  render() {
    return (
      <Table>
        <StyledCaption>Your Songs</StyledCaption>
        <Head>
          <HeaderRow>
            <HeaderCell width="25%">Artist</HeaderCell>
            <HeaderCell width="25%">Song</HeaderCell>
            <HeaderCell width="25%">Release Date</HeaderCell>
            <HeaderCell width="25%">Genre</HeaderCell>
          </HeaderRow>
        </Head>
        <Body>
          <Row>
            <Cell width="25%">Where are my shoes?</Cell>
            <Cell width="25%">John Smith</Cell>
            <Cell width="25%">15 minutes ago</Cell>
            <Cell width="25%">Ticket</Cell>
          </Row>
          <Row>
            <Cell width="25%">I was charged twice!</Cell>
            <Cell width="25%">Jane Doe</Cell>
            <Cell width="25%">25 minutes ago</Cell>
            <Cell width="25%">Call</Cell>
          </Row>
        </Body>
      </Table>
    );
  }
}

export default RoughTable;

/* --------------------------- Start Styles --------------------------------- */

const StyledCaption = styled(Caption)`
  margin: 10px;
  font-weight: bold;
  color: purple;
`;

/* --------------------------- End Styles --------------------------------- */

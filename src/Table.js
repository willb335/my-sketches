/* ----- Rough Table ------ */
import React, { Component } from 'react';
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
        <Caption>Your Unsolved Tickets</Caption>
        <Head>
          <HeaderRow>
            <HeaderCell width="25%">Subject</HeaderCell>
            <HeaderCell width="25%">Requester</HeaderCell>
            <HeaderCell width="25%">Requested</HeaderCell>
            <HeaderCell width="25%">Type</HeaderCell>
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

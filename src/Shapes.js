import React, { Component } from 'react';
import rough from 'roughjs';

const roughSquare = ({ squareElement, squareWidth }) => {
  const rc = rough.svg(squareElement);
  const square = rc.rectangle(0, 0, squareWidth, squareWidth, {
    roughness: 0.8,
    fill: '#b58863',
    bowing: 2
  });
  squareElement.appendChild(square);
};

export class Square extends Component {
  componentDidMount() {
    roughSquare({ squareElement: this.roughSquare, squareWidth: 90 });
  }

  render() {
    return <div ref={ref => (this.roughSquare = ref)} />;
  }
}

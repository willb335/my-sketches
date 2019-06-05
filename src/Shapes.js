import React, { Component } from 'react';
import rough from 'roughjs/dist/rough.umd';

class Shape extends Component {
  componentDidMount() {
    console.log('rough', rough);
    const rc = rough.canvas(this.canvasRef);
    rc.rectangle(10, 10, 100, 100);
  }

  render() {
    return (
      <div>
        <canvas ref={ref => (this.canvasRef = ref)} width="500" height="500" />
      </div>
    );
  }
}

export default Shape;

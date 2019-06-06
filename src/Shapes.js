import React, { Component } from 'react';
import rough from 'roughjs/dist/rough.umd';

class Shape extends Component {
  generateShape = type => {
    const rc = rough.canvas(this.canvasRef);

    switch (type) {
      case 'rectangle':
        rc.rectangle(10, 10, 100, 100, {
          fill: '#ff0065',
          fillStyle: 'solid' // solid fill
        });
        break;
      case 'elipse':
        rc.ellipse(50, 50, 100, 100);
        break;
      case 'circle':
        rc.circle(80, 120, 50, {
          fill: 'green',
          hachureAngle: 60, // angle of hachure,
          hachureGap: 2
        }); // centerX, centerY, diameter
        break;
      case 'line':
        rc.line(80, 120, 300, 100); // x1, y1, x2, y2
        break;
      default:
        console.log('No shape of that type');
    }
  };

  componentDidMount() {
    console.log('rough', rough);
    const { type } = this.props;
    this.generateShape(type);
  }

  render() {
    return (
      <div style={{ position: 'absolute', right: '-250px' }}>
        <canvas ref={ref => (this.canvasRef = ref)} width="500" height="500" />
      </div>
    );
  }
}

export default Shape;

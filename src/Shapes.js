import React, { Component } from 'react';
import rough from 'roughjs/dist/rough.umd';

class Shape extends Component {
  generateShape = (type, specs) => {
    const rc = rough.canvas(this.canvasRef);

    switch (type) {
      case 'rectangle':
        rc.rectangle(
          specs.x,
          specs.y,
          specs.height,
          specs.width,
          specs.options
        );
        break;
      case 'elipse':
        rc.ellipse(specs.x, specs.y, specs.height, specs.width, specs.options);
        break;
      case 'circle':
        rc.circle(specs.centerX, specs.centerY, specs.diameter, specs.options);
        break;
      case 'line':
        rc.line(specs.x1, specs.y1, specs.x2, specs.y2, specs.options);
        break;
      default:
        console.log('No shape of that type');
    }
  };

  componentDidMount() {
    console.log('rough', rough);
    const { type, specs } = this.props;
    this.generateShape(type, specs);
  }

  render() {
    return (
      <div style={{ position: 'absolute' }}>
        <canvas
          ref={ref => (this.canvasRef = ref)}
          style={{ border: `5px solid red` }}
          width="500"
          height="500"
        />
      </div>
    );
  }
}

export default Shape;

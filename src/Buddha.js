import React from 'react';
import rough from 'roughjs/dist/rough.umd';

class Buddha extends React.Component {
  componentDidMount() {
    console.log('rough', rough);
    const rc = rough.svg(this.buddhaRef);
    const node1 = rc.path('M80 80 A 45 45, 0, 0, 0, 125 125 L 125 80 Z', {
      fill: 'green'
    });
    const node2 = rc.rectangle(120, 15, 80, 80, {
      roughness: 2.8,
      fill: 'blue'
    });
    const node3 = rc.rectangle(220, 15, 80, 80, {
      bowing: 6,
      stroke: 'green',
      strokeWidth: 3
    });

    this.buddhaRef.appendChild(node1);
    this.buddhaRef.appendChild(node2);
    this.buddhaRef.appendChild(node3);
  }

  render() {
    return (
      <div>
        <svg ref={ref => (this.buddhaRef = ref)} />
      </div>
    );
  }
}

export default Buddha;

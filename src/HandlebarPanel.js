import React from 'react';
import rough from 'roughjs/dist/rough.umd';
import { node1Path, node2Path, node3Path } from './handlebarPanelPath';

class Buddha extends React.Component {
  componentDidMount() {
    console.log('rough', rough);
    const rc = rough.svg(this.buddhaRef);

    const node1 = rc.path(node1Path, { stroke: 'pink', strokeWidth: 1, roughness: 1, bowing: 2 });
    const node2 = rc.path(node2Path, { stroke: 'purple', strokeWidth: 1.5, roughness: .5, bowing: 5 });
    const node3 = rc.path(node3Path, { stroke: 'blue', strokeWidth: 1.5, roughness: .5, bowing: 5 });


    this.buddhaRef.appendChild(node1);
    this.buddhaRef.appendChild(node2);
    this.buddhaRef.appendChild(node3);

  }

  render() {
    return <svg ref={ref => (this.buddhaRef = ref)} height="500" width="500" />;
  }
}

export default Buddha;

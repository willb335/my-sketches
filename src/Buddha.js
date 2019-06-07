import React from 'react';
import rough from 'roughjs/dist/rough.umd';
import { node1Path, node2Path } from './buddhaPath';

class Buddha extends React.Component {
  componentDidMount() {
    console.log('rough', rough);
    const rc = rough.svg(this.buddhaRef);

    const node1 = rc.path(node1Path, { stroke: 'pink' });
    const node2 = rc.path(node2Path, { stroke: 'purple' });

    this.buddhaRef.appendChild(node1);
    this.buddhaRef.appendChild(node2);
  }

  render() {
    return <svg ref={ref => (this.buddhaRef = ref)} height="500" width="500" />;
  }
}

export default Buddha;

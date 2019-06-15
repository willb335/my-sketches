import React from 'react';
import rough from 'roughjs/dist/rough.umd';
import { node1Path, node2Path } from './buddhaPath';

class Buddha extends React.Component {
  componentDidMount() {
    console.log('rough', rough);
    const rc = rough.svg(this.buddhaRef);

    const node1 = rc.path(node1Path, {
      stroke: 'pink',
      strokeWidth: 2.5,
      roughness: 1.5,
      bowing: 5
    });
    const node2 = rc.path(node2Path, {
      stroke: 'darkorchid',
      strokeWidth: 1.25,
      roughness: 1,
      bowing: 3
    });

    this.buddhaRef.appendChild(node1);
    this.buddhaRef.appendChild(node2);
  }

  render() {
    return (
      <svg
        ref={ref => (this.buddhaRef = ref)}
        style={this.props.styles}
        height={this.props.size.height}
        width={this.props.size.width}
      />
    );
  }
}

export default Buddha;

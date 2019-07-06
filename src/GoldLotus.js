import React from 'react';
import rough from 'roughjs/dist/rough.umd';
import { node1Path } from './goldLotusPath';

class GoldLotus extends React.Component {
  componentDidMount() {
    const rc = rough.svg(this.goldLotus);

    const node1 = rc.path(node1Path, {
      stroke: 'darkorchid',
      strokeWidth: 1.5,
      roughness: 1,
      bowing: 5
    });
    // const node2 = rc.path(node2Path, {
    //   stroke: 'darkorchid',
    //   strokeWidth: 1.5,
    //   roughness: 0.5,
    //   bowing: 5
    // });

    this.goldLotus.appendChild(node1);
    // this.buddhaRef.appendChild(node2);
  }

  render() {
    return (
      <svg
        ref={ref => (this.goldLotus = ref)}
        style={this.props.styles}
        height={this.props.size.height}
        width={this.props.size.width}
      />
    );
  }
}

export default GoldLotus;

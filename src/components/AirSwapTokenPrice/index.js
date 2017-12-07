import React from 'react'
import container from './Container';

class AirSwapTokenPrice extends React.Component {

  componentDidMount() {
    this.props.queryPrice()
      .catch((e) => {
        alert(e);
      })
  }

  render() {
    return (
      <span className={this.props.className}>${this.props.price}</span>
    )
  }
}

export default container(AirSwapTokenPrice);

import React from 'react';

class Stateful extends React.Component {
  constructor(props) {
    super(props);
    this.state = { acornNum: 0, };
  }

  handleIncrement = () => {
    this.setState({ acornNum: 1 });
  }

  handleDecrease = () => {
    if (this.state.acornNum > 0) {
      this.setState({ acornNum: 0 });
    }
  }

  render() {
    return (
      <>
        <button onClick={this.handleIncrement}>Buy one</button>
        <p>{this.state.acornNum}</p>
        <button onClick={this.handleDecrease}>Eat one</button>
      </>
    );
  }
}

export default Stateful;
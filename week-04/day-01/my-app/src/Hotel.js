import React from 'react';

class Hotel extends React.Component {

  render() {
    return (
      <>
        <h3>{this.props.name}</h3>
        <img src = {this.props.imgSrc} alt = {this.props.descript} width = "200" height = "200"/>
        <p>{this.props.descript}</p>
      </>
    );
  }

}

export default Hotel;
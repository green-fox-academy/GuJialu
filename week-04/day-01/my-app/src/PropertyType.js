import React from 'react';

class PropertyType extends React.Component {

  render() {
    const ratings = ['Apartments', 'Hotels', 'Hostels'];
    const listItem = ratings.map((x) => <li><input type="checkbox"/>{x}</li>);
    const list = <ul>{listItem}</ul>;
    return (
      <>
        <h2>Property type</h2>
        {list}
      </>
    );
  }

}

export default PropertyType;
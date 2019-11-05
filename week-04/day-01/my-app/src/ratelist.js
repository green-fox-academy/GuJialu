import React from 'react';

class StarRating extends React.Component {

  render() {

    const ratings = ['1 star', '2 star', '3 star', '4 star', '5 star'];
    const listItem = ratings.map((x) => <li><input type="checkbox"/>{x}</li>);
    const list = <ul>{listItem}</ul>;
    return (
      <>
        <h2>Star Rating</h2>
        {list}
      </>
    );
  }

}

export default StarRating;
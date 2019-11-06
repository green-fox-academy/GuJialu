import React from 'react';
import Spinner from './Spinner-1s-200px.svg';


class NewsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    const url = 'https://newsapi.org/v2/top-headlines?country=cn&apiKey=00b3b7312c3441aa9e2547bb2ca4df8c';
    fetch('http://slowwy.greenfox.academy/delay/3000/url/' + url)
      .then((res) => res.json())
      .then((resObj) => {
        this.setState({ articles: resObj.articles });
        this.setState({ loading: false });
      })
  }

  render() {
    let articleListItems;
    if (this.state.loading) {
      articleListItems = <img src={Spinner} alt='Spinner' />;
    } else {
      articleListItems = this.state.articles.map((article) => <li key={article.title}>{article.title}</li>)
    }
    return (
      <>
        <ul>{articleListItems}</ul>
      </>
    );
  }
}

export default NewsList;
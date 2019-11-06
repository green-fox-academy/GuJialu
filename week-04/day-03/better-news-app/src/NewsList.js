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

  fetchNews(country) {
    this.setState({ loading: true });
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=00b3b7312c3441aa9e2547bb2ca4df8c`;
    fetch(url)
      .then((res) => res.json())
      .then((resObj) => {
        this.setState({ articles: resObj.articles });
        this.setState({ loading: false });
      })
  }

  componentDidMount() {
    this.fetchNews('cn');
  }

  changeCountry = (country) => {
    this.fetchNews(country);
    console.log(country);
  }

  render() {
    let articleListItems;
    if (this.state.loading) {
      articleListItems = <img src={Spinner} alt='Spinner' />;
    } else {
      articleListItems = this.state.articles.map((article) => <li key={article.title}>{article.title}</li>)
      console.log(this.state.articles);
    }

    let countryInput =
      <form onSubmit={(evt) => {this.changeCountry(evt.target[0].value); evt.preventDefault();}}>
        <input type="text" />
        <input type="submit" value="go" />
      </form>;

    return (
      <>
        <ul>{articleListItems}</ul>
        {countryInput}
      </>
    );
  }
}

export default NewsList;
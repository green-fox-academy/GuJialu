import React, { useState, useEffect } from 'react';
import Spinner from './Spinner-1s-200px.svg';

function NewsList (props) {

  const[articles, setArticles] = useState([]);
  const[loading, setLoading] = useState(false);

  function fetchNews(country) {
    setLoading(true);
    const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=00b3b7312c3441aa9e2547bb2ca4df8c`;
    fetch(url)
      .then((res) => res.json())
      .then((resObj) => {
        setArticles(resObj.articles);
        setLoading(false);
      })
  }

  function changeCountry (country) {
    if(country.length!==0){
      fetchNews(country);
    }
  }

    let articleListItems;
    if (loading) {
      articleListItems = <img src={Spinner} alt='Spinner' />;
    } else {
      articleListItems = articles.map((article) => <li key={article.title}>{article.title}</li>)
    }

    const countryInput = <input type="text" onChange={(evt) => {changeCountry(evt.target.value);} }/>
    return (
      <>
        <ul>{articleListItems}</ul>
        {countryInput}
      </>
    );

}

export default NewsList;
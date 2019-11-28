import React, { useState, useEffect } from 'react';
import VerticalGroup from '../generic/VerticalGroup/VerticalGroup';
import Post from '../Post/Post';

function Community({ name }) {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log('onmount');
    fetch('/posts')
      .then((res => { console.log(res); return res.json();}))
      .then((resObj) => {
        console.log(resObj);
        setPosts(resObj.posts)
      });
  }, [])

  return (
    <>
      <VerticalGroup>
        {posts.map((post) =>
          <Post
            title={post.title}
            url={post.url}
            timestamp={post.timestamp}
            owner={post.author_name}
            voteNum={post.voteNum}
            voteCondition="up"
          />)
        }
      </VerticalGroup>
    </>
  );

}

export default Community;

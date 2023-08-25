import React, { useEffect, useState } from "react";
import Post from "../Post";
import LoadingAnimation from "../component/LoadingAnimation";

const IndexPage = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/post").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);
  if (posts.length <= 0) return <LoadingAnimation />;
  return <>{posts.length > 0 && posts.map((post) => <Post {...post} />)}</>;
};

export default IndexPage;

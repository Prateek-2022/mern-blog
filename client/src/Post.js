import React from "react";

const Post = () => {
  return (
    <div>
      <div className="post">
        <div className="image">
          <img
            src="https://techcrunch.com/wp-content/uploads/2022/12/lawnmower-Large.jpeg?w=1390&crop=1"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>Full-house battery backup coming later this year</h2>
          <p className="info">
            <a className="author">Prateek yadav</a>
            <time>21-08-2023 04:29</time>
          </p>
          <p className="summary">
            Today at its special launch event, home backup power giant EcoFlow
            launched a flurry of new products, including a “Whole-Home Backup
            Power Solution.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Post;

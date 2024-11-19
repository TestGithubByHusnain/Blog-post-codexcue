// src/components/BlogPost.js
import React, { useState } from "react";

const BlogPost = ({ post }) => {
  const [showFullContent, setShowFullContent] = useState(false);

  const toggleContent = () => {
    setShowFullContent(!showFullContent);
  };

  return (
    <div className="blog-post">
      <img src={post.image} alt={post.title} className="blog-post-image" />
      <h2>{post.title}</h2>
      <p className="author-date">
        <strong>{post.author}</strong> | {post.date}
      </p>
      <p className="content">
        {showFullContent ? post.content : post.content.substring(0, 100) + "..."}
      </p>
      <button className="read-more-button" onClick={toggleContent}>
        {showFullContent ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default BlogPost;


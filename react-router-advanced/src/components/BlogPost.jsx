// src/components/BlogPost.jsx
import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams();
  return <div>Blog Post ID: {postId}</div>;
};

export default BlogPost;
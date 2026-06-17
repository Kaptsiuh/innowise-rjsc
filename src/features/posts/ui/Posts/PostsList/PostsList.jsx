import React from "react";
import * as s from "./PostsList.module.css";
import { Link } from "react-router-dom";
import { Post } from "@features/posts/ui/index.js";

export const PostsList = React.memo(({ posts, page }) => {
  return (
    <ul className={s.grid}>
      {posts.map((post) => (
        <li key={post.id} className={s.container}>
          <Link key={post.id} to={`/posts/${post.id}`} state={{ page }}>
            <Post post={post} />
          </Link>
        </li>
      ))}
    </ul>
  );
});

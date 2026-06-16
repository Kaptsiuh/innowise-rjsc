import React from "react";
import * as s from "./Posts.module.css";
import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../../api/dummyApi.js";
import { Post } from "../index.js";
import { LinearProgress } from "@common/components/index.js";

export const Posts = () => {
  const { data, isLoading, error } = useGetPostsQuery();

  if (isLoading) {
    return <LinearProgress />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={s.postsContainer}>
      <div className={s.header}>
        <h2 className={s.title}>Recent Posts</h2>
      </div>

      <div className={s.grid}>
        {data.posts?.map((post) => (
          <div key={post.id} className={s.container}>
            <Link to={`/posts/${post.id}`}>
              <Post post={post} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

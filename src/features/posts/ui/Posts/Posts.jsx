import React from "react";
import { useGetPostsQuery } from "../../api/dummyApi.js";
import { Post } from "./Post/Post";
import * as s from "./Posts.module.css";

export const Posts = () => {
  const { data, isLoading, error } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
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
          <div key={post.id}>
            <Post post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

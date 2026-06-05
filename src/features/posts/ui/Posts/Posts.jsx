import React from "react";
import { useGetPostsQuery } from "../../api/dummyApi.js";
import { Post } from "./Post/Post";

export const Posts = () => {
  const { data, isLoading, error } = useGetPostsQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {data.posts?.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

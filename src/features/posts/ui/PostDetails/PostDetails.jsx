import React from "react";
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../api/dummyApi";
import * as s from "./PostDetails.module.css";
import { Post } from "../Posts/Post/Post";

export const PostDetails = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetPostByIdQuery(id);

  if (isLoading) {
    return <div>Loading post...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={s.container}>
      <Post post={data} />
    </div>
  );
};

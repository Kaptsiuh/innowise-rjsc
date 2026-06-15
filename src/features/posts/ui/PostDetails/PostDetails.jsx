import React from "react";
import { useParams } from "react-router-dom";
import {
  useGetPostByIdQuery,
  useGetPostCommentsQuery,
} from "../../api/dummyApi";
import * as s from "./PostDetails.module.css";
import { Post } from "../Posts/Post/Post";
import { Comments } from "./Comments/Comments";

export const PostDetails = () => {
  const { id } = useParams();
  const {
    data: post,
    isLoading: isPostLoading,
    error: postError,
  } = useGetPostByIdQuery(id);
  const {
    data: comments,
    isLoading: isLoadingComments,
    error: commentsError,
  } = useGetPostCommentsQuery(id);

  if (isPostLoading || isLoadingComments) {
    return <div>Loading post...</div>;
  }

  if (postError) {
    return (
      <div>Error loading post: {postError.message || "Unknown error"}</div>
    );
  }

  if (commentsError) {
    return (
      <div>
        Error loading comments: {commentsError.message || "Unknown error"}
      </div>
    );
  }

  return (
    <div className={s.container}>
      <Post post={post} />
      {comments.map((comment) => {
        return <Comments key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

import React from "react";
import * as s from "./PostDetails.module.css";
import { useParams } from "react-router-dom";
import {
  useGetPostByIdQuery,
  useGetPostCommentsQuery,
} from "../../api/dummyApi";
import { Post, Comments } from "../index.js";
import { LinearProgress } from "@common/components/index.js";

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

  if (isPostLoading) {
    return <LinearProgress />;
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
      {isLoadingComments && <LinearProgress />}
      <Post post={post} />
      {comments?.map((comment) => {
        return <Comments key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

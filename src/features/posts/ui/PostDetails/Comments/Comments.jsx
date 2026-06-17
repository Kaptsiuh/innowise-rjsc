import React from "react";
import * as s from "./Comments.module.css";
import { useGetPostCommentsQuery } from "../../../api/dummyApi.js";
import { Comment } from "../../index.js";
import { ErrorMessage, LinearProgress } from "@common/components/index.js";

export const Comments = ({ id }) => {
  const { data: comments, isLoading, error } = useGetPostCommentsQuery(id);

  if (isLoading) {
    return <LinearProgress />;
  }

  if (error) {
    return (
      <div className={s.errorWrapper}>
        <ErrorMessage error={error} message="Failed to load comments" />
      </div>
    );
  }

  if (!comments || comments.length === 0) {
    return <div className={s.noComments}>No comments yet</div>;
  }

  return (
    <div className={s.commentsContainer}>
      <h2 className={s.commentsTitle}>Comments ({comments.length})</h2>
      <ul>
        {comments.map((comment) => {
          return (
            <li className={s.comment} key={comment.id}>
              <Comment comment={comment} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

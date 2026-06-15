import React from "react";
import * as s from "./Comments.module.css";

export const Comments = ({ comment }) => {
  if (!comment) return null;

  return (
    <div className={s.comment}>
      <div className={s.header}>
        <div className={s.avatar}>{comment.user.username[0].toUpperCase()}</div>
        <div className={s.userInfo}>
          <h3 className={s.userName}>{comment.user.fullName}</h3>
        </div>
        <span className={s.likes}>likes: {comment.likes || 0}</span>
      </div>
      <p className={s.body}>{comment.body}</p>
    </div>
  );
};

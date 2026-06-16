import React from "react";
import * as s from "./Comment.module.css";

export const Comment = ({ comment }) => {
  if (!comment) return null;

  const username = comment.user?.username || "anonymous";
  const fullName = comment.user?.fullName || username;
  const avatarLetter = username[0]?.toUpperCase() || "?";

  return (
    <div className={s.comment}>
      <div className={s.header}>
        <div className={s.avatar}>{avatarLetter}</div>
        <div className={s.userInfo}>
          <h4 className={s.userName}>{fullName}</h4>
        </div>
      </div>
      <p className={s.body}>{comment.body}</p>
      <span className={s.likes}>likes: {comment.likes || 0}</span>
    </div>
  );
};

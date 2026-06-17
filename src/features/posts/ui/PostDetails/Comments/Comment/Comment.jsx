import React from "react";
import * as s from "./Comment.module.css";

export const Comment = React.memo(({ comment }) => {
  if (!comment) return null;

  const username = comment.user?.username || "anonymous";
  const fullName = comment.user?.fullName || username;
  const avatarLetter = username[0]?.toUpperCase() || "?";

  return (
    <>
      <div className={s.header}>
        <div className={s.avatar}>{avatarLetter}</div>
        <h4 className={s.userName}>{fullName}</h4>
      </div>
      <p className={s.body}>{comment.body}</p>
      <span className={s.likes}>likes: {comment.likes || 0}</span>
    </>
  );
});

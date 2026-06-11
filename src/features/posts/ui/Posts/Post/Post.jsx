import React from "react";
import { Reaction } from "./Reaction/Reaction";
import * as s from "./Post.module.css";

export const Post = ({ post }) => {
  const { title, body, tags, reactions } = post;

  return (
    <div className={s.container}>
      <div className={s.content}>
        <div className={s.post}>
          <h3 className={s.title}>{title}</h3>
          <p className={s.body}>{body}</p>
          <ul className={s.tags}>
            {tags.map((tag) => (
              <span key={tag} className={s.tag}>
                #{tag}
              </span>
            ))}
          </ul>
          <div className={s.reactionSection}>
            <ul className={s.reactions}>
              <Reaction title={"likes"} reaction={reactions.likes} />
              <Reaction title={"dislikes"} reaction={reactions.dislikes} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import * as s from "./Post.module.css";
import { Reaction } from "@features/posts/ui/index.js";

export const Post = React.memo(({ post }) => {
  const { title, body, tags, reactions, views } = post;

  return (
    <div className={s.post}>
      <h3 className={s.title}>{title}</h3>
      <p className={s.body}>{body}</p>
      <ul className={s.tags}>
        {tags.map((tag) => (
          <li key={tag} className={s.tag}>
            #{tag}
          </li>
        ))}
      </ul>
      <ul className={s.reactions}>
        <Reaction title={"likes"} reaction={reactions.likes} />
        <Reaction title={"dislikes"} reaction={reactions.dislikes} />
        <Reaction title={"views"} reaction={views} />
      </ul>
    </div>
  );
});

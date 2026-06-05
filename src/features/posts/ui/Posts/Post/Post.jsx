import React from "react";
import { Tag } from "./Tag/Tag";
import { Reaction } from "./Reaction/Reaction";

export const Post = ({ post }) => {
  const { title, body, tags, reactions } = post;

  return (
    <div>
      <h3>{title}</h3>
      <p>{body}</p>
      <ul>
        {tags.map((tag) => (
          <Tag key={post.id + tag} item={tag} />
        ))}
      </ul>
      <ul>
        <Reaction title={"likes"} reaction={reactions.likes} />
        <Reaction title={"dislikes"} reaction={reactions.dislikes} />
      </ul>
    </div>
  );
};

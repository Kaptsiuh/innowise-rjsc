import React from "react";

export const Reaction = ({ title, reaction }) => {
  return (
    <li>
      {title}: <span>{reaction}</span>
    </li>
  );
};

import React from "react";
import * as s from "./Reaction.module.css";

export const Reaction = ({ title, reaction }) => {
  return (
    <li className={s.reaction}>
      {title}: <span>{reaction}</span>
    </li>
  );
};

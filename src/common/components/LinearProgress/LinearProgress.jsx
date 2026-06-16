import React from "react";
import * as s from "./LinearProgress.module.css";

export const LinearProgress = () => {
  return (
    <div className={s.progressContainer}>
      <div className={`${s.progressBar} ${s.animation}`} />
    </div>
  );
};

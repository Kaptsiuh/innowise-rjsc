import React from "react";
import * as s from "./ErrorMessage.module.css";

export const ErrorMessage = ({ error, message }) => {
  const errorText =
    message || error?.data?.message || error?.message || "An error occurred";

  return (
    <div className={s.errorContainer}>
      <div className={s.errorContent}>
        <span className={s.errorMessage}>{errorText}</span>
      </div>
    </div>
  );
};

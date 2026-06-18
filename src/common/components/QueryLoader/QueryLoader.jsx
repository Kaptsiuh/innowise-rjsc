import React from "react";
import * as s from "./QueryLoader.module.css";
import { getErrorMessage } from "@common/utils/index.js";
import { ErrorMessage, LinearProgress } from "@common/components/index.js";

export const QueryLoader = ({ isLoading, error, children }) => {
  if (isLoading) {
    return <LinearProgress />;
  }

  if (error) {
    return (
      <div className={s.errorWrapper}>
        <ErrorMessage error={error} message={getErrorMessage(error)} />
      </div>
    );
  }

  return children;
};

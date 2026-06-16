import React from "react";
import * as s from "./PostDetails.module.css";
import { useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../api/dummyApi";
import { Post, Comments } from "../index.js";
import { LinearProgress, ErrorMessage } from "@common/components/index.js";
import { getErrorMessage } from "@common/utils/errorHandler.js";

export const PostDetails = () => {
  const { id } = useParams();
  const { data: post, isLoading, error } = useGetPostByIdQuery(id);

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

  return (
    <div className={s.container}>
      <Post post={post} />
      <Comments id={id} />
    </div>
  );
};

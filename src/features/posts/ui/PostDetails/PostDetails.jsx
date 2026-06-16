import React from "react";
import * as s from "./PostDetails.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../api/dummyApi";
import { Post, Comments } from "../index.js";
import { LinearProgress, ErrorMessage } from "@common/components/index.js";
import { getErrorMessage } from "@common/utils/errorHandler.js";
import { Button } from "@common/components/index.js";

export const PostDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { data: post, isLoading, error } = useGetPostByIdQuery(id);

  const page = location.state?.page || 1;

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
      <Button
        className={s.returnButton}
        onClick={() => navigate("/", { state: { page } })}
      >
        Back to posts
      </Button>
      <Post post={post} />
      <Comments id={id} />
    </div>
  );
};

import React, { useMemo } from "react";
import * as s from "./PostDetails.module.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../api/dummyApi";
import { Post, Comments } from "../index.js";
import { Button } from "@common/components/index.js";
import { Helmet } from "react-helmet-async";
import { QueryLoader } from "@common/components/QueryLoader/QueryLoader.jsx";

export const PostDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const { data: post, isLoading, error } = useGetPostByIdQuery(id);

  const page = location.state?.page || 1;
  const navigateState = useMemo(() => ({ page }), [page]);

  return (
    <>
      <Helmet>
        <title>{post?.title || "Post"}</title>
        <meta
          name="description"
          content={post?.body?.slice(0, 160) || "Read this post"}
        />
      </Helmet>
      <div className={s.container}>
        <Button
          className={s.returnButton}
          onClick={() => navigate("/", { state: navigateState })}
        >
          Back to posts
        </Button>
        <QueryLoader isLoading={isLoading} error={error}>
          <Post post={post} />
          <Comments id={id} />
        </QueryLoader>
      </div>
    </>
  );
};

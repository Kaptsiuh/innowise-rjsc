import React from "react";
import * as s from "./Posts.module.css";
import { useLocation } from "react-router-dom";
import { useGetPostsQuery } from "../../api/dummyApi.js";
import { PostsList } from "@features/posts/ui/index.js";
import {
  LinearProgress,
  ErrorMessage,
  Pagination,
} from "@common/components/index.js";
import { getErrorMessage } from "@common/utils/errorHandler.js";
import { POSTS_LIMIT } from "@common/constants/constants.js";
import { usePagination } from "@common/hooks/usePagination.js";
import { Helmet } from "react-helmet-async";

export const Posts = () => {
  const location = useLocation();
  const initialPage = location.state?.page || 1;

  const { page, skip, handlePageChange, getTotalPages } = usePagination(
    initialPage,
    POSTS_LIMIT,
  );

  const { data, isLoading, error } = useGetPostsQuery({
    limit: POSTS_LIMIT,
    skip,
  });

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

  const totalPages = getTotalPages(data?.total || 0);

  if (!data?.posts?.length) {
    return <div className={s.noPosts}>No posts found</div>;
  }

  return (
    <>
      <Helmet>
        <title>Posts</title>
        <meta name="description" content="All posts on our blog" />
      </Helmet>
      <div className={s.postsContainer}>
        <h2 className={s.title}>Recent Posts</h2>
        <PostsList posts={data.posts} page={page} />
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

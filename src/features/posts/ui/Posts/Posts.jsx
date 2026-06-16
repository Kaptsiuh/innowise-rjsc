import React from "react";
import * as s from "./Posts.module.css";
import { Link } from "react-router-dom";
import { useGetPostsQuery } from "../../api/dummyApi.js";
import { Post } from "../index.js";
import {
  LinearProgress,
  ErrorMessage,
  Pagination,
} from "@common/components/index.js";
import { getErrorMessage } from "@common/utils/errorHandler.js";
import { POSTS_LIMIT } from "@common/constants/constants.js";
import { usePagination } from "@common/hooks/usePagination.js";

export const Posts = () => {
  const { page, skip, handlePageChange, getTotalPages } = usePagination(
    1,
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
    <div className={s.postsContainer}>
      <div className={s.header}>
        <h2 className={s.title}>Recent Posts</h2>
      </div>

      <div className={s.grid}>
        {data?.posts?.map((post) => (
          <div key={post.id} className={s.container}>
            <Link to={`/posts/${post.id}`}>
              <Post post={post} />
            </Link>
          </div>
        ))}
      </div>

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

import React from "react";
import * as s from "./Posts.module.css";
import { useLocation } from "react-router-dom";
import { useGetPostsQuery } from "../../api/dummyApi.js";
import { PostsList } from "@features/posts/ui/index.js";
import { Pagination } from "@common/components/index.js";
import { POSTS_LIMIT } from "@common/constants/constants.js";
import { usePagination } from "@common/hooks/usePagination.js";
import { Helmet } from "react-helmet-async";
import { QueryLoader } from "@common/components/QueryLoader/QueryLoader.jsx";

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

  const totalPages = getTotalPages(data?.total || 0);

  return (
    <>
      <Helmet>
        <title>Posts</title>
        <meta name="description" content="All posts on our blog" />
      </Helmet>
      <div className={s.postsContainer}>
        <h2 className={s.title}>Recent Posts</h2>
        <QueryLoader isLoading={isLoading} error={error}>
          {!data?.posts?.length ? (
            <div className={s.noPosts}>No posts found</div>
          ) : (
            <>
              <PostsList posts={data.posts} page={page} />
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </>
          )}
        </QueryLoader>
      </div>
    </>
  );
};

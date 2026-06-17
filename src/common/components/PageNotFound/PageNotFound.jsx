import React from "react";
import * as s from "./PageNotFound.module.css";
import { Helmet } from "react-helmet-async";

export const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
        <meta
          name="description"
          content="The page you are looking for does not exist"
        />
      </Helmet>
      <div className={s.container}>
        <h2 className={s.title}>404</h2>
        <p className={s.subtitle}>page not found</p>
      </div>
    </>
  );
};

import React from "react";
import * as s from "./Login.module.css";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../../api/authApi.js";
import { DEFAULT_USER_VALUES } from "@common/constants/index.js";
import {
  Input,
  Button,
  LinearProgress,
  ErrorMessage,
} from "@common/components/index.js";
import { getErrorMessage } from "@common/utils/errorHandler.js";
import { Helmet } from "react-helmet-async";

export const Login = () => {
  const [login, { error: apiError, isLoading }] = useLoginMutation();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: DEFAULT_USER_VALUES,
  });

  const onSubmit = async (data) => {
    try {
      await login(data).unwrap();
      reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Sign in to access" />
      </Helmet>
      <div className={s.container}>
        {isLoading && <LinearProgress />}

        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <p className={s.title}>Sign in</p>
          <div className={s.field}>
            <Input
              id={"username"}
              label={"Username"}
              register={register}
              name={"username"}
              error={errors.username}
              placeholder={"Enter username"}
              disabled={isLoading}
            />
            <Input
              id={"password"}
              label={"Password"}
              type={"password"}
              register={register}
              name={"password"}
              error={errors.password}
              placeholder={"Password"}
              disabled={isLoading}
            />

            {apiError && (
              <ErrorMessage
                error={apiError}
                message={
                  getErrorMessage(apiError) || "Invalid username or password"
                }
              />
            )}

            <Button type="submit" className={s.button} disabled={isLoading}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

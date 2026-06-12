import React from "react";
import * as s from "./Login.module.css";
import { useLoginMutation } from "../../api/authApi.js";
import { useForm } from "react-hook-form";
import { Path } from "../../../../common/routing/index.js";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsLoggedInAC } from "../../../../app-slice.js";

export const Login = () => {
  const [login, { error: apiError }] = useLoginMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { username: "", password: "" },
  });

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();

      if (res) {
        dispatch(setIsLoggedInAC({ isLoggedIn: true }));
        reset();
        navigate(Path.Posts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={s.container}>
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <p className={s.title}>Sign in</p>
        <div className={s.field}>
          <div className={s.inputGroup}>
            <label htmlFor="username" className={s.label}>
              Username
            </label>
            <input
              id="username"
              placeholder="Enter username"
              type="text"
              className={s.input}
              {...register("username", {
                required: "Username is required",
              })}
            />
            {errors.username && (
              <span className={s.errorMessage}>{errors.username.message}</span>
            )}
          </div>

          <div className={s.inputGroup}>
            <label htmlFor="password" className={s.label}>
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="password"
              className={s.input}
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <span className={s.errorMessage}>{errors.password.message}</span>
            )}
          </div>

          {apiError && (
            <span className={s.errorMessage}>
              {apiError.data?.message || "Invalid username or password"}
            </span>
          )}

          <button type="submit" className={s.button}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

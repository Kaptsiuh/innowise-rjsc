import React from "react";
import * as s from "./Login.module.css";
import { useLoginMutation } from "../../api/authApi.js";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setIsLoggedInAC } from "../../../../app-slice.js";
import { DEFAULT_USER_VALUES } from "../../../../common/constants/index.js";
import { Button } from "../../../../common/components/Button/Button.jsx";
import { Input } from "../../../../common/components/Input/Input.jsx";

export const Login = () => {
  const [login, { error: apiError }] = useLoginMutation();

  const dispatch = useDispatch();

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
      const res = await login(data).unwrap();

      if (res) {
        dispatch(setIsLoggedInAC({ isLoggedIn: true }));
        reset();
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
          <Input
            id={"username"}
            label={"Username"}
            register={register}
            name={"username"}
            error={errors.username}
            placeholder={"Enter username"}
          />
          <Input
            id={"password"}
            label={"Password"}
            register={register}
            name={"password"}
            error={errors.password}
            placeholder={"Password"}
          />

          {apiError && (
            <span className={s.errorMessage}>
              {apiError.data?.message || "Invalid username or password"}
            </span>
          )}

          <Button type="submit" className={s.button}>
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

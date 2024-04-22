import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { loginValidationSchema } from "./loginValidation";
import { Button, FormContainer, Input } from "../../../components/header/atoms";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../../../redux/slices/userSlice";
import { useUser } from "../../../hooks";

export const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(loginValidationSchema),
  });
  const navigate = useNavigate();
  const { loading } = useUser();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(authenticateUser({ formValues: data, isLogin: true }))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div>
      <FormContainer>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => {
            const { name, onChange } = field;
            return (
              <Input
                name={name}
                onChange={onChange}
                label="Email"
                error={Boolean(errors.email)}
                helperText={errors.email?.message}
              />
            );
          }}
        />{" "}
        <Controller
          name="password"
          control={control}
          defaultValue=""
          render={({ field }) => {
            const { name, onChange } = field;
            return (
              <Input
                type="password"
                name={name}
                onChange={onChange}
                label="Password"
                error={Boolean(errors.password)}
                helperText={errors.password?.message}
              />
            );
          }}
        />
        <Button disabled={!isValid || loading} onClick={handleSubmit(onSubmit)}>
          Log in
        </Button>
      </FormContainer>
    </div>
  );
};

import React from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupValidationSchema } from "./signupValidation";
import { Button, FormContainer, Input } from "../../../components/header/atoms";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "../../../redux/slices/userSlice";
import { useUser } from "../../../hooks";

export const SignupForm = () => {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(signupValidationSchema),
  });

  const { loading } = useUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(authenticateUser({ formValues: data, isLogin: false }))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <FormContainer>
      <Controller
        name="firstName"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="First name"
              error={Boolean(errors.firstName)}
              helperText={errors.firstName?.message}
            />
          );
        }}
      />
      <Controller
        name="lastName"
        control={control}
        defaultValue=""
        render={({ field }) => {
          const { name, onChange } = field;
          return (
            <Input
              name={name}
              onChange={onChange}
              label="Last name"
              error={Boolean(errors.lastName)}
              helperText={errors.lastName?.message}
            />
          );
        }}
      />
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
      />
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
        sign up
      </Button>
    </FormContainer>
  );
};

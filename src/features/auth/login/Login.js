import React from "react";
import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { Text, Snackbar, Link } from "../../../components/atoms";
import { LoginForm } from "./LoginForm";
import { useUser } from "../../../hooks";
import { clearError } from "../../../redux/slices";
import LogoImage from "../../../assets/images/logo-2150297_640.jpg";
import { FormPageContainer } from "../../../components/atoms/FormContainer";

export const Login = () => {
  const { error } = useUser();
  const dispatch = useDispatch();
  return (
    <FormPageContainer isLoginForm={false}>
      <Stack>
        <Text>Login</Text>
        <LoginForm />
      </Stack>
      <Snackbar
        message={error}
        onClose={() => {
          dispatch(clearError());
        }}
        severity="error"
      />
    </FormPageContainer>
  );
};

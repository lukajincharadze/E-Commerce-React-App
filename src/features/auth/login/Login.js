import React from "react";
import { Stack } from "@mui/material";
import { useDispatch } from "react-redux";
import { Text, Snackbar, Link } from "../../../components/header/atoms";
import { LoginForm } from "./LoginForm";
import { useUser } from "../../../hooks";
import { clearError } from "../../../redux/slices";
import { FormPageContainer } from "../../../components/header/atoms/FormContainer";

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

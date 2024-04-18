import React from "react";
import { Stack } from "@mui/material";
import { Snackbar, Text } from "../../../components/atoms";
import { SignupForm } from "./SignupForm";
import { useUser } from "../../../hooks";
import { useDispatch } from "react-redux";
import { clearError } from "../../../redux/slices";
import { FormPageContainer } from "../../../components/atoms/FormContainer";

export const Signup = () => {
  const { error } = useUser();
  const dispatch = useDispatch();
  return (
    <>
      <FormPageContainer isLoginForm={false}>
        <Stack>
          <Text>Sign up</Text>
          <SignupForm />
        </Stack>
      </FormPageContainer>
      <Snackbar
        message={error}
        severity="error"
        onClose={() => {
          dispatch(clearError());
        }}
      />
    </>
  );
};

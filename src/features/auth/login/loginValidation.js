import * as yup from "yup";

export const loginValidationSchema = yup.object({
  email: yup.string().email("Invalid email format"),
  password: yup
    .string()
    .required()
    .min(7, "Password must be at least 7 characters")
    .max(50, "Password must be at least 50 characters"),
});

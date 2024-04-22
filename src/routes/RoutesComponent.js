import React from "react";
import { useRoutes } from "react-router-dom";
import {
  CategoryProductPage,
  HomePage,
  LoginPage,
  ProductFormPage,
  SignupPage,
  SingleProductPage,
} from "../pages";
import { Layout } from "../components/Layout";
import { ProtectedRoute } from "./ProtectedRoute";
import { useUser } from "../hooks";
import { isUserAdmin } from "../helpers";

export const RoutesComponent = () => {
  const { userData } = useUser();
  const isAdmin = isUserAdmin(userData);
  return (
    <div>
      {useRoutes([
        {
          path: "/login",
          element: <LoginPage />,
        },

        {
          path: "/signup",
          element: <SignupPage />,
        },
        {
          element: <Layout />,
          children: [
            {
              path: "/",
              element: <HomePage />,
            },
            {
              path: "/products/categories/:category",
              element: <CategoryProductPage />,
            },
            {
              path: "/products/categories/:category/:id",
              element: <SingleProductPage />,
            },
            {
              path: "/products/add",
              element: (
                <ProtectedRoute hasAccess={isAdmin}>
                  <ProductFormPage />
                </ProtectedRoute>
              ),
            },
            {
              path: "/products/:id/edit",
              element: (
                <ProtectedRoute hasAccess={isAdmin}>
                  <ProductFormPage />
                </ProtectedRoute>
              ),
            },
          ],
        },
      ])}
    </div>
  );
};

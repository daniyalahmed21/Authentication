import React from "react";
import {CardWrapper} from "@/components/auth/card-wrapper";
const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Welcome Back"
      BackButtonLabel="Not a member? Sign up"
      BackButtonHref="/auth/register"
      ShowSocial={true}
    >
      Login form
    </CardWrapper>
  );
};

export default LoginForm;

import React from "react";
import {CardWrapper} from "@/components/auth/card-wrapper";
const LoginForm = () => {
  return (
    <div >
      <CardWrapper
      headerLabel="Welcome Back"
      BackButtonLabel="Not a member? Sign up"
      BackButtonHref="/auth/register"
      ShowSocial>
      Login form
    </CardWrapper>
    </div>
  );
};

export default LoginForm;

import { SignInForm, SignInLogo } from "@/components/signin";
import React from "react";

const SignInPage = async () => {
  return (
    <div className="screen-size dw-bg-green-500 flex flex-col md:flex-row-reverse">
      <SignInLogo />
      <SignInForm />
    </div>
  );
};

export default SignInPage;

"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export const SignInForm = () => {
  const searchParam = useSearchParams();
  const [email, setEmail] = useState("");

  useEffect(() => {
    const error = searchParam.get("error") || "";
    if (error.length > 0) {
      toast.error(error);
    }
  }, [searchParam]);

  return (
    <div className="flex-center mx-auto size-full">
      <div className="flex w-full max-w-[384px] flex-col gap-4 p-1">
        <h1 className="dw-text-white text-2xl">Sign In</h1>
        <form
          className="space-y-3"
          action={() => signIn("credentials", { email })}
        >
          <Input
            onChange={(e) => setEmail(e.target.value)}
            className="dw-text-default placeholder:dw-text-placeholder"
            placeholder="E-mail"
          />
          <Button
            type="submit"
            className="w-full bg-[#49A569] text-xl hover:bg-[#49A569]"
          >
            Sign In
          </Button>
        </form>
      </div>
    </div>
  );
};

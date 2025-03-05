"use client"
import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {

  const handleSignIn = async(provider:"google" | "github") =>{
      await signIn(provider)
  }
  return (
    <div className="w-full flex items-center gap-x-2">
      <Button  onClick={()=>handleSignIn("google")} variant="secondary" size="lg" className="w-full">
        <FcGoogle />
      </Button>
      <Button onClick={()=>handleSignIn("github")} className="w-full" variant="secondary" size="lg">
        <FaGithub />
      </Button>
    </div>
  );
};

export default Social;

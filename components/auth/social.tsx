import React from "react";
import { Button } from "../ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Social = () => {
  return (
    <div className="w-full flex items-center gap-x-2">
      <Button variant="secondary" size="lg" className="w-full">
        <FcGoogle />
      </Button>
      <Button className="w-full" variant="secondary" size="lg">
        <FaGithub />
      </Button>
    </div>
  );
};

export default Social;

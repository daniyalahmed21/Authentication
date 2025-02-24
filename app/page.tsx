import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/login-button";

const font = Poppins({
  subsets: ["latin"],
  weight: "600",
});

export default function Home() {
  return (
    <main className="flex flex-col gap-6 h-screen justify-center items-center bg-sky-600">
      <div className="space-y-6">
        <h1 className={cn("text-white font-semibold text-6xl", font.className)}>
          🔐Auth
        </h1>
        <p className="text-white text-lg">A simple authentication service</p>
      </div>
      <div>
        <LoginButton>
          <Button variant="secondary" size="lg">
            Sign In
          </Button>
        </LoginButton>
      </div>
    </main>
  );
}

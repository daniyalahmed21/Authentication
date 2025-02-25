import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
const Header = ({ label }: { label: string }) => {
  return (
    <div className="w-full flex justify-center items-center gap-y-4 flex-col">
      <h1 className={cn("text-3xl font-semibold", font.className)}>🔐Auth</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;

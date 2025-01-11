import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const NavButtons: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <Link
        href="/signin"
        className={cn(
          buttonVariants({ size: "sm", variant: "outline" }),
          "w-full",
        )}
      >
        Sign in
      </Link>
      <Link
        href="/signup"
        className={cn(buttonVariants({ size: "sm" }), "w-full")}
      >
        Get started
      </Link>
    </div>
  );
};

import Link from "next/link";
import { UserButton } from "@/components/ui/user-button";
import { Button } from "@/components/ui/button";
import { auth } from "@/server/auth";
import { Logo } from "../logo";

export async function Navbar() {
  const session = await auth();

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <Logo />
        <div className="ml-auto flex items-center space-x-4">
          {session?.user ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <UserButton />
            </>
          ) : (
            <>
              <Link href="/auth/signin">
                <Button variant="ghost">Sign in</Button>
              </Link>
              <Link href="/auth/signup">
                <Button>Get Started</Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

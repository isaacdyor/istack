import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { auth } from "@/server/auth";

export default async function SignIn() {
  const session = await auth();

  if (session?.user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-muted-foreground text-sm">
            Sign in to your account to continue
          </p>
        </div>
        <div className="grid gap-6">
          <form>
            <div className="grid gap-4">
              <Button className="w-full" asChild>
                <a href="/api/auth/signin/google">Continue with Google</a>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

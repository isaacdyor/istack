import { redirect } from "next/navigation";
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";
import { auth } from "@/server/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session?.user) {
    redirect("/auth/signin");
  }

  return (
    <div className="flex h-screen">
      <SidebarProvider>
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto py-6">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
}

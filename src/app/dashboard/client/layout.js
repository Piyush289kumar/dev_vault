import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { getUserById } from "@/lib/auth";
import { protectRoute } from "@/middleware/authMiddleware";

export default async function ClientDashboardLayout({ children }) {
  const { redirect, user } = await protectRoute("client");

  if (redirect) {
    return <meta httpEquiv="refresh" content={`0; url=${redirect}`} />;
  }
  let userData;
  if (user) {
    userData = await getUserById(user.id);
  }

  return (
    <SidebarProvider>
      <AppSidebar user={userData} />
      <SidebarInset>{children}</SidebarInset>
    </SidebarProvider>
  );
}

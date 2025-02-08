import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { protectRoute } from "@/middleware/authMiddleware";

export default async function ClientDashboardLayout({ children }) {
    const { redirect, user } = await protectRoute("client");

    if (redirect) {
        return <meta httpEquiv="refresh" content={`0; url=${redirect}`} />;
    }

    if (!user) {
        console.warn("User not found in session.");
        return null;
    }

    return (
        <SidebarProvider>
            <AppSidebar user={user} />
            <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
    );
}

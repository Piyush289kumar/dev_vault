import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
// import { getUserIdFromSession } from "@/lib/SessionFetcher";
import { getUserSession, getUserById } from "@/lib/auth";

export default async function ClientDashboardLayout({ children }) {
    const userId = await getUserSession(); // Fetch userId from JWT cookies

    if (!userId) {
        console.warn("No user ID found in session.");
        return null; // Handle case where user is not authenticated
    }

    const user = await getUserById(userId); // Fetch user details from DB
    return (
        <SidebarProvider>
            <AppSidebar user={user} />
            <SidebarInset>{children}</SidebarInset>
        </SidebarProvider>
    );
}

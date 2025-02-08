import { getUserSession } from "@/lib/auth";

export async function protectRoute(role) {
    const user = getUserSession(); // Don't await, it's not async

    if (!user) {
        console.warn("No user session found, redirecting...");
        return { redirect: "/auth/sign-in", user: null };
    }

    if (role && user.role !== role) {
        console.warn(`User does not have ${role} role, redirecting...`);
        return { redirect: "/unauthorized", user: null };
    }

    return { redirect: null, user };
}

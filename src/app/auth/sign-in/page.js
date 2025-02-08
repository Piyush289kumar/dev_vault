"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for redirection
import { LoginForm } from "@/components/login-form";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Define role-based routes
const roleRoutes = {
  client: "/dashboard/client",
  admin: "/dashboard/admin",
  developer: "/dashboard/developer",
};

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Function to check if user is already logged in
async function fetchUserSession() {
  try {
    console.log("Fetching session...");

    const res = await fetch("/api/auth/session"); // ✅ Correct API path
    console.log("API Response:", res);

    if (!res.ok) {
      console.warn("API request failed with status:", res.status);
      return null;
    }

    const data = await res.json();
    console.log("Decoded User Data:", data);
    
    return data.user || null;
  } catch (error) {
    console.error("Error fetching session:", error);
    return null;
  }
}

export default function LoginPage() {
  const router = useRouter(); // Initialize Next.js router
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      const user = await fetchUserSession();

      console.log('user');
      console.log(user);
      

      if (user?.id && user?.role && roleRoutes[user.role]) {
        router.push(roleRoutes[user.role]); // Redirect to the correct dashboard
      } else {
        setLoading(false);
      }
    }
    checkSession();
  }, []);

  // Show loading screen while checking session
  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <QueryClientProvider client={queryClient}>
        <LoginForm />
      </QueryClientProvider>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}

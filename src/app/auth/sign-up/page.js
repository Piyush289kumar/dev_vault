"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RegisterForm } from "@/components/register-form";

// Create a new QueryClient instance
const queryClient = new QueryClient();

export default function LoginPage() {
  return (
    <>
      <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <QueryClientProvider client={queryClient}>
          <RegisterForm />
        </QueryClientProvider>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>
    </>
  );
}

"use client";
import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { signIn} from "next-auth/react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import Link from "next/link";
// Function to handle SignIn API request
async function signInWithUserCredentials({ email, password }) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/auth/sign-in`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
      credentials: "include",
    }
  );
  return response.json();
}
export function LoginForm({ className, ...props }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Use mutation hook properly
  
  const mutation = useMutation({
    mutationFn: signInWithUserCredentials,
    onSuccess: (data) => {
      if (data?.message === "Login successful") {
        router.push("/dashboard"); // Redirect only if login is successful
      } else {
        alert(data?.message || "Login failed. Please try again.");
      }
    },
    onError: (error) => {
      console.error("Login Error:", error);
      alert(error?.message || "An error occurred during login.");
    },
  }); 
  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };



  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      <Card className="overflow-hidden">
        <HoverBorderGradient
          containerClassName="rounded-2xl"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 p-0"
        >
          <CardContent className="grid p-0 md:grid-cols-2 text-start">
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 w-auto lg:w-[350px]"
            >
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Welcome back</h1>
                  <p className="text-balance text-muted-foreground">
                    Login to your{" "}
                    {process.env.NEXT_APP_NAME ?? "Dev Vault Tech"} account
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {/* Social buttons */}
                  <Button variant="outline" className="w-full" onClick={() => signIn("google")}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                      <path
                        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="sr-only">Login with Google</span>
                  </Button>
                  <Button variant="outline" className="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" fill="currentColor"/></svg>
                    <span className="sr-only">Login with Facebook</span>
                  </Button>
                  <Button variant="outline" className="w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2" fill="currentColor"/></svg>
                    </svg>
                    <span className="sr-only">Login with GitHub</span>
                  </Button>
                </div>
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span className="relative z-10 bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@gmail.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto text-sm underline-offset-2 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2"
                  disabled={mutation.isPending}
                >
                  {mutation.isPending && (
                    <LoaderCircle className="animate-spin w-5 h-5" />
                  )}
                  {mutation.isPending ? "Signing in..." : "Sign In"}
                </Button>
                {mutation.isError && (
                  <div className="text-red-500 mt-2 text-center">
                    {mutation.error.message ||
                      "Sign in failed, please try again."}
                  </div>
                )}
                {mutation.isSuccess && mutation.data && (
                  <div className="text-green-500 mt-2 text-center">
                    {mutation.data.message || "Sign in successful!"}
                  </div>
                )}
                <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span className="relative z-10 bg-background px-2 text-muted-foreground">
                    Don’t have an account?{" "}
                    <Link href="/auth/sign-up" className="text-md font-bold">
                      Sign up
                    </Link>
                  </span>
                </div>
              </div>
            </form>
          </CardContent>
        </HoverBorderGradient>
      </Card>
    </div>
  );
}

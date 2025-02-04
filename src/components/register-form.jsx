import { useMutation } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { LoaderCircle } from "lucide-react"; // ✅ Import LoaderCircle

async function signUp({ name, email, password }) {
  console.log("API call started..."); // ✅ Debug log
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/auth/sign-up`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
      credentials: "include",
    }
  );

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Sign Up failed");
  }

  console.log("API call success..."); // ✅ Debug log
  return response.json();
}

export function RegisterForm({ className, ...props }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: signUp,
    onMutate: () => console.log("Mutation started..."), // ✅ Debug log
    onSuccess: (data) => {
      console.log("Signup Success:", data);
      alert("Signup successful. Please verify your email.");
    },
    onError: (error) => {
      console.error("Signup Error:", error);
      alert(error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted, calling mutate..."); // ✅ Debug log
    mutation.mutate({ name, email, password });
  };

  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      <Card className="overflow-hidden">
        <HoverBorderGradient
          containerClassName="rounded-2xl"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 p-0"
        >
          <CardContent className="grid p-0 md:grid-cols-2">
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 w-auto lg:w-[350px]"
            >
              <div className="flex flex-col gap-6 text-start">
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-2xl font-bold">Create an Account</h1>
                  <p className="text-muted-foreground">
                    Sign up for {process.env.NEXT_APP_NAME ?? "Dev Vault Tech"}
                  </p>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
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
                  {mutation.isPending ? "Signing up..." : "Sign Up"}
                </Button>

                {mutation.isError && (
                  <div className="text-red-500 mt-2 text-center">
                    {mutation.error.message ||
                      "Signup failed, please try again."}
                  </div>
                )}
                {mutation.isSuccess && (
                  <div className="text-green-500 mt-2 text-center">
                    {data.message || "Signup successful! Check your email."}
                  </div>
                )}
              </div>
            </form>
          </CardContent>
        </HoverBorderGradient>
      </Card>
    </div>
  );
}

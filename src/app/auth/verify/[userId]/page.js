"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter for navigation
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { BadgeCheck } from "lucide-react";

export default function Page({ params }) {
  const [userId, setUserId] = useState(null);
  const [message, setMessage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false); // To handle the loading state
  const [isVerified, setIsVerified] = useState(false); // Track if the user is already verified
  const router = useRouter(); // Initialize useRouter for redirection

  // Using React.use() to unwrap the params
  useEffect(() => {
    const fetchUserId = async () => {
      const userParams = await params; // Unwrap the Promise
      if (userParams?.userId) {
        setUserId(userParams.userId);
      }
    };

    fetchUserId();
  }, [params]);

  const handleVerify = async () => {
    if (!userId) {
      setMessage("User ID not found.");
      setIsOpen(true);
      return;
    }

    setIsVerifying(true);
    try {
      const res = await fetch(`/api/auth/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });

      const data = await res.json();

      if (data.user && data.user.isVerified) {
        setIsVerified(true);
        setMessage("Your email is already verified.");
      } else {
        setMessage(data.message || "Verification successful!");
      }
    } catch (error) {
      setMessage("Error verifying user.");
    } finally {
      setIsVerifying(false);
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (isVerified) {
      setTimeout(() => {
        router.push("/api/auth/SignIn");
      }, 2000);
    }
  }, [isVerified, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-xl font-bold">Email Verification</h1>
      {/* Button to trigger the Alert Dialog */}
      <Button
        onClick={() => setIsOpen(true)}
        variant="outline"
        className="mt-4"
      >
        Verify Your Email <BadgeCheck />
      </Button>

      {/* Alert Dialog */}
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Email Verification</AlertDialogTitle>
            <AlertDialogDescription>
              {isVerified
                ? "Your email is already verified."
                : message || "Are you sure you want to verify the email?"}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleVerify}
              disabled={isVerifying || isVerified}
            >
              {isVerifying
                ? "Verifying..."
                : isVerified
                ? "Already Verified"
                : "Verify"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

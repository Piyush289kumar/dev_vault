"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertDialog, AlertDialogTrigger, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogDescription } from "@/components/ui/alert-dialog";

export default function VerifyPage({ params }) {
  const userId = params.user; // Get the userId from the route
  const [message, setMessage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (userId) {
      const verifyUser = async () => {
        try {
          const res = await fetch(`/api/auth/verify`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId }),
          });

          const data = await res.json();
          setMessage(data.message);
          setIsOpen(true); // Open alert box
        } catch (error) {
          setMessage("Error verifying user.");
          setIsOpen(true);
        }
      };
      verifyUser();
    }
  }, [userId]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-xl font-bold">Email Verification</h1>
      <p>User ID: {userId}</p>

      {/* ShadCN Alert Box */}
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Email Verification</AlertDialogTitle>
            <AlertDialogDescription>{message}</AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

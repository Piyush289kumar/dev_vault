"use client";

import { useEffect, useState } from "react";
import { 
  AlertDialog,  
  AlertDialogContent, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogCancel, 
  AlertDialogAction 
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function Page({ params }) {
  const [userId, setUserId] = useState(null);
  const [message, setMessage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);  // To handle the loading state
  const [isUserVerified, setIsUserVerified] = useState(false); 

  useEffect(() => {
    if (params?.userId) {
      setUserId(params.userId);
    }
  }, [params]);

  const handleVerify = async () => {
    if (!userId) {
      setMessage("User ID not found.");
      setIsOpen(true);
      return;
    }

    setIsVerifying(true); // Start the verification process

    try {
      const res = await fetch(`/api/auth/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId }),
      });

      const data = await res.json();
      setMessage(data.message || "Verification successful!");
    } catch (error) {
      setMessage("Error verifying user.");
    } finally {
      setIsVerifying(false);  // End the verification process
      setIsOpen(true);  // Open the alert dialog
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-xl font-bold">Email Verification</h1>      

      {/* Button to trigger the Alert Dialog */}
      <Button 
        onClick={() => setIsOpen(true)} 
        variant="outline"
        
      >
        Show Dialog
      </Button>

      {/* Alert Dialog */}
      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Email Verification</AlertDialogTitle>
            <AlertDialogDescription>
              {message || "Are you sure you want to verify the email?"}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsOpen(false)}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleVerify}
              disabled={isVerifying} // Disable the button while verifying
            >
              {isVerifying ? "Verifying..." : "Verify"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

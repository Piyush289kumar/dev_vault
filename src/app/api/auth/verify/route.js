// src/app/auth/verify/[user].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const VerifyPage = () => {
  const router = useRouter();
  const { user } = router.query;  // Capture the `user` dynamic parameter from the URL
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if (user) {
      // Call the API to verify the user (you can pass the user ID here)
      const verifyUser = async () => {
        try {
          const res = await fetch(`/api/auth/verify?user=${user}`);
          const data = await res.json();
          setMessage(data.message);  // Display the response message
        } catch (error) {
          setMessage("Error verifying user.");
        }
      };
      verifyUser();
    }
  }, [user]);

  return (
    <div>
      <h1>Email Verification</h1>
      {user && <p>User ID: {user}</p>}  {/* Display the user ID */}
      {message ? <p>{message}</p> : <p>Verifying...</p>}
    </div>
  );
};

export default VerifyPage;

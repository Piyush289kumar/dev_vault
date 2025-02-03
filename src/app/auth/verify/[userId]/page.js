'use client';

export default async function Page({ params }) {
  
    const userId = (await params).userId
    console.log(params);
    

  // useEffect(() => {
  //   if (user) {
  //     // Call the API to verify the user
  //     const verifyUser = async () => {
  //       try {
  //         const res = await fetch(`/api/auth/verify?user=${user}`);
  //         const data = await res.json();
  //         setMessage(data.message); // Display the response message
  //       } catch (error) {
  //         setMessage("Error verifying user.");
  //       }
  //     };
  //     verifyUser();
  //   }
  // }, [user]);

  return (
    <div>
      <h1>Email Verification</h1>
      {<p>User ID: {userId}</p>}
      {/* {message ? <p>{message}</p> : <p>Verifying...</p>} */}
    </div>
  );
};

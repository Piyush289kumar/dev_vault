export function errorHandler(error, customMessage = "Server error") {
    console.error("Server Error:", error?.message || error);
  
    return new Response(
      JSON.stringify({
        message: customMessage || "Something went wrong, please try again later.",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
  
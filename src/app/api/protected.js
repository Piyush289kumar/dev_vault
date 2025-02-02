import { authMiddleware } from "@/middleware/authMiddleware";

export async function GET(req) {
  const response = authMiddleware(req);
  if (response.status !== 200) return response;

  return new Response(JSON.stringify({ message: "Protected data" }), {
    status: 200,
  });
}

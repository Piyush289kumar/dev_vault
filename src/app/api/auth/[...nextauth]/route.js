// /api/auth/[...nextauth]/route.js

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { MongoClient } from "mongodb";
import User from "@/models/userModel";  // Import your Mongoose model

// MongoDB connection function
async function connectToDatabase() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  return client.db();
}

// NextAuth configuration
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const db = await connectToDatabase();

      // Check if the user exists in MongoDB (via Mongoose model)
      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        // Create new user with Mongoose
        await User.create({
          email: user.email,
          name: user.name,
          image: user.image,  // Store the Google profile image URL
          isVerified: true,
          role: 'client', // Default to 'client' role
        });
      }

      return true;
    },

    async session({ session, user }) {
      session.user.id = user.id; // Add user ID to the session
      return session;
    },
  },
  pages: {
    signIn: "/auth/sign-in", 
    error: "/auth/error",
  },
  debug: true, // Enable debug information for development
};

// Named exports for each HTTP method
export async function GET(req, res) {
  return NextAuth(req, res, authOptions);
}

export async function POST(req, res) {
  return NextAuth(req, res, authOptions);
}

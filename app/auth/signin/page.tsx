"use client";
import { signIn, signOut } from "next-auth/react";

export default function Login() {
  const handleLogin = async () => {
    signIn("spotify"); 
  };

  const handleLogout = async () => {
   signOut();
  }

  return (
   <>
   <button onClick={handleLogin}>Login with Spotify</button>
   <button onClick={handleLogout}>Logout with Spotify</button>
   </>
   )
}

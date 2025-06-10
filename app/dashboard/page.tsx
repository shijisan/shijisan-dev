"use client";

import { auth } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import Link from "next/link";

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
        router.push("/");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  const handleSignout = async () => {
    await signOut(auth);
    router.push("/");
  };

  if (loading) {
    return (
      <main className="min-h-screen w-full flex items-center justify-center bg-white">
        <p>Loading...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center gap-4 bg-white">
      <p>Welcome, {user?.displayName || "Unknown User"} 👋</p>
      <Link className="btn bg-blue-500" href="/">Home</Link>
      <button
        className="btn bg-red-500 px-4 py-2 rounded text-white hover:bg-red-600"
        onClick={handleSignout}
      >
        Sign-out
      </button>
      
      {/* form onchange submit */}
      <form>
         <select name="0" id="0">
            <option value="1">Open to work</option>
            <option value="2">Employed</option>
         </select>
         <input type="text" placeholder="working at" />
         
      </form>
    </main>
  );
}

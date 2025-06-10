"use client"

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { auth } from "@/utils/firebase"
import { useRouter } from "next/navigation";

export default function Auth(){

   const router = useRouter();
   const allowedEmail = "cjsantos2411638@gmail.com";
   
   const handleGoogleSignIn = async () => {
      const provider = new GoogleAuthProvider();
      try{
         const result = await signInWithPopup(auth, provider);
         const user = result.user;
         if (user.email !== allowedEmail){
            alert("Access denied");
            await auth.signOut();
            return;
         }
         console.log("Logged in as: ", user.displayName);
         router.push("/dashboard");
      }
      catch(error){
         console.error("Failed to login", error);
      }
   };
   
   return(
      <>
      <main className="min-h-screen w-full flex justify-center items-center bg-white">
         <button
         className="bg-blue-500 btn"
         onClick={handleGoogleSignIn}
         >
            Login with Google
         </button>
      </main>
      </>
   )
}
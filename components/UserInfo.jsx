"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function UserInfo() {
  const { data: session } = useSession();

  return (
      <div className="Myname">
        <h1>MyName: {session?.user?.name}</h1>
        {/* Email: <span className="">{session?.user?.email}</span> */}
        <button onClick={() => signOut()} className="buttonlogout">
        Log Out
      </button>
      </div>
    
  );
}

"use client";

import { useState } from "react";
import Editor from "@/components/Editor";
import Navbar from "@/components/Navbar";


export default function Home() {
  const [code, setCode] = useState(
    `print("Hello from yourcompiler")`
  );

  return (
    <main className="h-screen bg-gray-900">
        <Navbar />
        <Editor value={code} onChange={setCode}/>
    </main>
  );
}

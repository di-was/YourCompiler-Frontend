"use client";

import { useState } from "react";
import Editor from "@/components/Editor";

export default function Home() {
  const [code, setCode] = useState(
    `print("Hello from yourcompiler")`
  );

  return (
    <main className="h-screen bg-gray-900">
      <Editor
        language="python"
        value={code}
        onChange={setCode}
      />
    </main>
  );
}

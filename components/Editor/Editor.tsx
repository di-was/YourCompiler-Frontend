"use client";

import {Editor as MonacoEditor} from "@monaco-editor/react";
import useLanguageContext from "@/contexts/Language/UseLanguageContext";
import UseExecutionContext from "@/contexts/Execution/UseExecutionContext";


export default function Editor() {
  const {language, version, setLanguage, setVersion} = useLanguageContext();
  const {code, setCode} = UseExecutionContext();
  return (
      <div className="h-full w-full">    
        <MonacoEditor
          height="100%"
          width="100%"
          language={language}
          value={code}
          theme="vs-dark"
          onChange={(val) => setCode(val ?? "")}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            scrollBeyondLastLine: false,
            automaticLayout: true,
          }}
        />
     </div>
  );
}
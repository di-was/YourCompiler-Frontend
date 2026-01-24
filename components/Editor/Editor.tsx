"use client";

import {Editor as MonacoEditor} from "@monaco-editor/react";
import useLanguageContext from "@/contexts/Language/UseLanguageContext";

type EditorProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function Editor({
  value,
  onChange,
}: EditorProps) {
  const {language, version, setLanguage, setVersion} = useLanguageContext();
  return (
      <div className="h-full w-full">    
        <MonacoEditor
          height="100%"
          width="100%"
          language={language}
          value={value}
          theme="vs-dark"
          onChange={(val) => onChange(val ?? "")}
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
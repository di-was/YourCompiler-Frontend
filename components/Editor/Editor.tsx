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
                beforeMount={(monaco) => {
        monaco.editor.defineTheme("myTheme", {
          base: "vs-dark",
          inherit: true,
          rules: [
            { token: "comment", foreground: "#a0eb75" },
            { token: "string", foreground: "#eda78c" },
            { token: "keyword", foreground: "#ed63e1" },
            { token: "number", foreground: "#d0efc0" },
          ],
          colors: {
            "editor.background": "#111827",
            "editor.foreground": "#e1dada",
            "editorLineNumber.foreground": "#7180a9",
            "editorCursor.foreground": "#FFCC00",
            "editor.selectionBackground": "#264F78",
            "editor.lineHighlightBackground": "#111A33",
            "editorIndentGuide.background": "#1E2A4A",
            "editorIndentGuide.activeBackground": "#3A4B7A",
          },
          
        });
      }}
      onMount={(editor, monaco) => {
        monaco.editor.setTheme("myTheme");
      }}
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
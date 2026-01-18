"use client";

import {Editor as MonacoEditor} from "@monaco-editor/react";

type EditorProps = {
  language: string;
  value: string;
  onChange: (value: string) => void;
};

export default function Editor({
  language,
  value,
  onChange,
}: EditorProps) {
  return (
    <MonacoEditor
      height="50%"
      width="50%"
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
  );
}
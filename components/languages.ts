export type Language = {
  id: string;          
  label: string;       
  monaco: string;     
};

export const LANGUAGES: Language[] = [
  { id: "python", label: "Python", monaco: "python" },
  { id: "javascript", label: "JavaScript", monaco: "javascript" },
  { id: "typescript", label: "TypeScript", monaco: "typescript" },
  { id: "cpp", label: "C++", monaco: "cpp" },
  { id: "csharp", label: "C#", monaco: "csharp" },
  { id: "java", label: "Java", monaco: "java" },
  { id: "go", label: "Go", monaco: "go" },
];
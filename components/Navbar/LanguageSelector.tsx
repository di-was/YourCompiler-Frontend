"use client";

import * as Select from "@radix-ui/react-select";
import useLanguageConfig from "@/contexts/LanguageConfig/useLanguageConfig";
import UseExecutionContext from "@/contexts/Execution/UseExecutionContext";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

const languageIconMap: Record<string, string> = {
  c: "devicon-c-plain colored",
  cpp: "devicon-cplusplus-plain colored",
  "c++": "devicon-cplusplus-plain colored",
  csharp: "devicon-csharp-plain colored",
  "c#": "devicon-csharp-plain colored",
  java: "devicon-java-plain colored",
  javascript: "devicon-javascript-plain colored",
  js: "devicon-javascript-plain colored",
  typescript: "devicon-typescript-plain colored",
  ts: "devicon-typescript-plain colored",
  python: "devicon-python-plain colored",

};

function getLanguageIcon(language: string) {
  return languageIconMap[language.toLowerCase()] || "devicon-devicon-plain";
}

export default function LanguageSelector({ value, onChange }: Props) {
  const { data } = useLanguageConfig();
  const { setCode } = UseExecutionContext();
  const languages = Object.keys(data);

  const current = value || "select";

  return (
    <label className="flex items-center gap-2">
      <span>Language</span>

      <Select.Root
        value={value}
        onValueChange={(newValue) => {
          onChange(newValue);
          setCode(data[newValue].skeletonCode);
        }}
      >
        <Select.Trigger
          className="
            inline-flex h-8 w-[170px] items-center justify-between
            rounded-md bg-primary px-3 text-sm text-white
            outline-none
            ring-1 ring-white/10
            transition
            hover:ring-white/20
            focus:ring-2 focus:ring-gray-700
          "
        >
          <div className="flex items-center gap-2">
            {value && <i className={`${getLanguageIcon(value)} text-lg`} />}
            <Select.Value>{current}</Select.Value>
          </div>

          <Select.Icon className="text-white/50">
            <svg
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8l4 4 4-4" />
            </svg>
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content
            position="popper"
            sideOffset={6}
            className="
              z-50 overflow-hidden rounded-md
              bg-primary/95 backdrop-blur
              ring-1 ring-white/10 shadow-lg
              w-[var(--radix-select-trigger-width)]
              data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95
              data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95
              origin-top
            "
          >
            <Select.Viewport className="p-1">
              {languages.map((l) => (
                <Select.Item
                  key={l}
                  value={l}
                  className="
                    relative flex cursor-pointer select-none items-center
                    rounded-sm px-2 py-1.5 text-sm text-white/90
                    outline-none
                    focus:bg-white/10
                    data-[state=checked]:bg-white/10
                  "
                >
                  <div className="flex items-center gap-2">
                    <i className={`${getLanguageIcon(l)} text-[18px] w-5 text-center`} />
                    <Select.ItemText className="text-sm">{l}</Select.ItemText>
                  </div>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </label>
  );
}
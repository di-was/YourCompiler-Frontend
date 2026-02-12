"use client";

import * as Select from "@radix-ui/react-select";
import { LANGUAGES } from "@/components/languages";

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function LanguageSelector({ value, onChange }: Props) {
  const current = LANGUAGES.find((l) => l.id === value)?.label ?? "Select";

  return (
    <label className="flex items-center gap-2">
      <span>Language</span>

      <Select.Root value={value} onValueChange={onChange}>
        <Select.Trigger
          className="
            inline-flex h-8 w-[150px] items-center justify-between
            rounded-md bg-primary px-3 text-sm text-white
            outline-none
            ring-1 ring-white/10
            transition
            hover:ring-white/20
            focus:ring-2 focus:ring-gray-700
          "
        >
          <Select.Value>{current}</Select.Value>
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
              {LANGUAGES.map((l) => (
                <Select.Item
                  key={l.id}
                  value={l.id}
                  className="
                    relative flex cursor-pointer select-none items-center
                    rounded-sm px-2 py-1.5 text-sm text-white/90
                    outline-none
                    focus:bg-white/10
                    data-[state=checked]:bg-white/10
                  "
                >
                  <Select.ItemText>{l.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </label>
  );
}

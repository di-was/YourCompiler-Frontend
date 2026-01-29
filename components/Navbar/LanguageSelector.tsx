import { LANGUAGES } from "@/components/languages";


type Props = {
    value:string;
    onChange:(v:string) => void; 
}

export default function LanguageSelector({value, onChange}: Props) {
    return (
    <label className="flex items-center gap-2">
      <span>Language</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-8 w-[150px] rounded-md bg-primary
                    px-3 text-sm outline-none
                    focus:ring-2 focus:ring-gray-700 appearance-none"
        >
          {LANGUAGES.map((l) => (
            <option key={l.id} value={l.id}>
              {l.label}
            </option>
          ))}
          
        </select>
        <svg
          className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 8l4 4 4-4" />
        </svg>
      </div>
    </label>
    );
}
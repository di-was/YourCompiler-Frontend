import { LANGUAGES } from "@/components/languages";


type Props = {
    value:string;
    onChange:(v:string) => void; 
}

export default function LanguageSelector({value, onChange}: Props) {
    return (
    <label className="flex items-center gap-2">
      <span className="text-xs text-gray-400">Language</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-9 w-[200px] rounded-md bg-gray-900/60 border border-gray-800
                   px-3 text-sm text-gray-100 outline-none
                   focus:ring-2 focus:ring-gray-700"
      >
        {LANGUAGES.map((l) => (
          <option key={l.id} value={l.id} className="bg-gray-950">
            {l.label}
          </option>
        ))}
      </select>
    </label>
    );
}
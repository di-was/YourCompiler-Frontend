"use client";

import LanguageSelector from "@/components/LanguageSelector";
import VersionSelector from "@/components/VersionSelector";
import useLanguageContext from "@/contexts/Language/UseLanguageContext";

export default function Navbar() {
    const {language, setLanguage} = useLanguageContext();
    return (
        <nav className="w-screen h-10 bg-white flex items-center justify-left px-4 gap-4">
            <LanguageSelector value={language} onChange={setLanguage} />
            <VersionSelector />
        </nav>
    );
}
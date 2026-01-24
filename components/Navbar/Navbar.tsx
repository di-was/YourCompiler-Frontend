"use client";

import LanguageSelector from "@/components/Navbar/LanguageSelector";
import VersionSelector from "@/components/Navbar/VersionSelector";
import useLanguageContext from "@/contexts/Language/UseLanguageContext";

export default function Navbar() {
    const {language, setLanguage} = useLanguageContext();
    return (
        <nav className="w-screen h-15 bg-white flex items-center justify-left px-4">
            <LanguageSelector value={language} onChange={setLanguage} />
            <VersionSelector />
        </nav>
    );
}
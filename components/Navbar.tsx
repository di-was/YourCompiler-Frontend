"use client";

import LanguageSelector from "@/components/LanguageSelector";
import VersionSelector from "@/components/VersionSelector";

export default function Navbar() {
    return (
        <nav className="w-screen h-10 bg-white flex items-center justify-left px-4 gap-4">
            <LanguageSelector />
            <VersionSelector />
        </nav>
    );
}
"use client";

import LanguageSelector from "@/components/Navbar/LanguageSelector";
import VersionSelector from "@/components/Navbar/VersionSelector";
import useLanguageContext from "@/contexts/Language/UseLanguageContext";
import RunButton from "./RunButton";
import ClearOutputButton from "./ClearOutputButton";
import CopyCodeButton from "./CopyCodeButton";


type NavbarProps = {
    layout : [number, number];
};

export default function Navbar({layout}: NavbarProps) {
    const {language, setLanguage} = useLanguageContext();
    const [leftPanelSize, rightPanelSize] = layout;
    
    return (
        <div className="w-screen h-15 bg-secondary text-white flex items-center justify-left px-4"
        style={{
            display: "grid",
            gridTemplateColumns: `${leftPanelSize}% 4px ${rightPanelSize}%`,
            alignItems: "center",
        }}>
            <div className="px-4 flex items-center gap-4 justify-between">
                <div>
                    <LanguageSelector value={language} onChange={setLanguage} />
                </div>
                <div className="flex items-center gap-4">
                     <CopyCodeButton/>
                    <RunButton/>
                </div>
            </div>

            <div className="ml-auto px-4" />

            <div className="px-3 flex items-center justify-end">
                <ClearOutputButton/>
            </div>
        </div>
    );
}
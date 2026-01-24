"use client";
import {useState} from "react";
import { LanguageContext } from "@/contexts/Language/LanguageContext";

type LanguageContextProviderProps = {
    children: React.ReactNode;
};

export default function LanguageContextProvider({children} : LanguageContextProviderProps) {
    const [language, setLanguage] = useState("python");
    const [version, setVersion] = useState("1");

    return (
        <LanguageContext.Provider value={{language, version, setLanguage, setVersion}}>
            {children}
        </LanguageContext.Provider>
    );
}
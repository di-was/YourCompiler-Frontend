import {useContext} from "react";
import { LanguageContext } from "@/contexts/Language/LanguageContext";

export default function useLanguageContext() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguageContext must be used within a LanguageContextProvider");
    }
    return context;
}
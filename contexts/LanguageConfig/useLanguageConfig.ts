import { LanguageConfigContext } from "./LanguageConfigContext";
import { useContext } from "react";

export default function useLanguageConfig() {
    const ctx = useContext(LanguageConfigContext);
    if (!ctx) throw new Error("useLanguageConfig must be used within a LanguageConfigContextProvider");
    return ctx;
}
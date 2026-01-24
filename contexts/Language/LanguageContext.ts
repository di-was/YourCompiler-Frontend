"use client";
import { createContext, use } from "react";

export const LanguageContext = createContext<{
    language: string;
    version: string;
    setLanguage: (lang: string) => void;
    setVersion: (ver: string) => void;
} | null>(null);
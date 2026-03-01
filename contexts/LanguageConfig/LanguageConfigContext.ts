"use client";
import {createContext} from "react";



export type LanguageId = string;


export type language = {
    defaultVersion: string;
    availableVersions: string[];
    skeletonCode: string;
}

export type LanguageConfig = {
    data: Record<LanguageId, language>;
    refresh: () => void;
};

export const LanguageConfigContext = createContext<LanguageConfig | null>(null);
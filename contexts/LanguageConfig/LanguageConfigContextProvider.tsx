"use client";

import {useMemo, useState} from 'react';
import {useEffect} from 'react';
import { LanguageConfig } from './LanguageConfigContext';
import { LanguageId, language } from './LanguageConfigContext';
import { LanguageConfigContext } from './LanguageConfigContext';
import { API_BASE_URL } from '@/config/env';

type LanguageConfigContextProviderProps = {
    children: React.ReactNode;
};

type ResponseType = {
    config: Record<LanguageId, language>;
}

export default function LanguageConfigContextProvider({children}: LanguageConfigContextProviderProps) {

    const [data, setData] = useState<Record<LanguageId, language>>({});


    const fetchLanguages = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/getAvailableLanguages`, {cache: "no-store"});
            if (!res.ok) throw new Error("Failed to fetch Language configurations");
            const response = (await res.json()) as ResponseType;
            // setters
           setData(response.config);
        } catch (e: any) {
            console.error(e);
        } finally {
        }

    };

    useEffect(() => {
        fetchLanguages();
    }, []);

    const value = useMemo<LanguageConfig>(
        () => ({
            data,
            refresh: fetchLanguages,
        }), [data]);

    return(
        <LanguageConfigContext.Provider  value={value}>
            {children}
        </LanguageConfigContext.Provider>
    );
}

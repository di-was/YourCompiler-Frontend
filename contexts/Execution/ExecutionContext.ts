"use client";
import {createContext} from "react";


export const ExecutionContext = createContext<{
    code: string,
    setCode: (code: string) => void,
    output: string,
    setOutput: (output: string) => void
} | null>(null);
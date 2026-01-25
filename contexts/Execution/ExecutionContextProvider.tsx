"use client";
import {useState} from "react";
import {ExecutionContext} from "./ExecutionContext";

type ExecutionContextProviderProps = {
    children: React.ReactNode;
};

export default function ExecutionContextProvider({children}: ExecutionContextProviderProps) {
    const [code, setCode] = useState("###### Python Interpreter - yourcompiler.com ###### \n\n print('Hello world from python')");
    const [output, setOutput] = useState("Output Console - yourcompiler.com");

    return (
        <ExecutionContext.Provider value={{code, setCode, output, setOutput}}>
            {children}
        </ExecutionContext.Provider>
    );
}
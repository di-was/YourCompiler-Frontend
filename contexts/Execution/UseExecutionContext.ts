import {useContext} from "react";
import {ExecutionContext} from "./ExecutionContext";

export default function UseExecutionContext() {
    const context = useContext(ExecutionContext);
    if (!context) {
        throw new Error("useExecutionContext must be used within an ExecutionContextProvider");
    }
    return context;
}
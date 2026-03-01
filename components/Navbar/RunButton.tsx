import UseExecutionContext from "@/contexts/Execution/UseExecutionContext";
import useLanguageContext from "@/contexts/Language/UseLanguageContext";
import { useState } from "react";
import { API_BASE_URL } from "@/config/env";

export default function RunButton() {
    const [running, setRunning] = useState(false);
    const {language, setLanguage} = useLanguageContext();
    const {code, setOutput} = UseExecutionContext();

 
    const handleClick = async () => {
        setRunning(true);

        try {
            const res = await fetch(`${API_BASE_URL}/api/compile/${language}`, {
                method: "POST",
                headers: {"Content-Type": "application/json",
                          "Accept": "*/*",
                },
                body: JSON.stringify({code, version: "defaultVersion"}),
            });
            const data = await res.text();
            setOutput(data);
        } catch (error) {
            console.error("Error during code execution:", error);
        } finally {
            setRunning(false);
        };
    }
    return (
        <button onClick={handleClick}
        className="px-3 py-1 text-white rounded-md border-3 border-secondary bg-distinctive
                   hover:brightness-120 hover:cursor-pointer
                   ">
            Run
        </button>
    );  
}
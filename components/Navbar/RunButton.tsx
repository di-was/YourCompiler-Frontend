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
            const res = await fetch(`/api/compile/${language}`, {
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
        <button disabled={running} onClick={handleClick}
            className={`px-3 py-1 text-white rounded-md border-3 border-secondary bg-distinctive
                    hover:brightness-120
                    ${running 
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:brightness-120 hover:cursor-pointer"}
                    `}>
            <span className="relative flex items-center justify-center">

                {running && (
                <div className="absolute w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                )}

                <span className={running ? "invisible" : ""}>
                Run
                </span>

            </span>
        </button>
    );  
}
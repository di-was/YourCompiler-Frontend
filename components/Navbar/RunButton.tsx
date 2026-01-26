import UseExecutionContext from "@/contexts/Execution/UseExecutionContext";
import useLanguageContext from "@/contexts/Language/UseLanguageContext";
import { useState } from "react";

export default function RunButton() {
    const [running, setRunning] = useState(false);
    const {language, setLanguage} = useLanguageContext();
    const {code, setOutput} = UseExecutionContext();

    const handleClick = async () => {
        setRunning(true);

        try {
            const res = await fetch(`http://localhost:5270/api/compile/${language}`, {
                method: "POST",
                headers: {"Content-Type": "application/json",
                          "Accept": "*/*",
                },
                body: JSON.stringify(code),
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
        className="ml-10 px-4 py-2 bg-green-500 text-white rounded-md
                   hover:bg-green-600 hover:cursor-pointer hover:ring-2 hover:ring-green-300
                   active:scale-95 active:brightness-80 active:ring-4 active:ring-green-200 transition">
            Run
        </button>
    );
}
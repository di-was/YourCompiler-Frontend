import UseExecutionContext from "@/contexts/Execution/UseExecutionContext";

export default function ClearOutputButton() {
    const {setOutput} = UseExecutionContext();
    return (
        <button className="text-white px-3 py-1 rounded-md border-1 border-white hover:bg-white/10"
                onClick={() => setOutput("Output Console - yourcompiler.com")}>
                Clear
        </button>
    );
}
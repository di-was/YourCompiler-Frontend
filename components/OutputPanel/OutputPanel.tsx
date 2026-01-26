import UseExecutionContext from "@/contexts/Execution/UseExecutionContext";

export default function OutputPanel() {
    const {output, setOutput} = UseExecutionContext();
    return (
        <div className="h-full w-full bg-gray-800 text-white p-4">
            {output}
        </div>
    );
}
export default function CopyCodeButton() {
    return (
        <button
            className="
                p-2 rounded-md
                hover:bg-white/10
                active:scale-95
                transition
            "
            aria-label="Copy code"
            >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.8"
            >
                <rect x="9" y="9" width="13" height="13" rx="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
        </button>
    );
}
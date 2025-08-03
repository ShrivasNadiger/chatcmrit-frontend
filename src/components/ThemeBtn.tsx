import { useTheme } from "../contexts/ThemeContext";

export default function ThemeBtn() {
    const { themeMode, setThemeMode } = useTheme();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setThemeMode(e.target.checked ? "dark" : "light");
    };

    return (
        <div className="flex items-center gap-2">
            <label className="relative inline-flex items-center cursor-pointer select-none">
                <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={themeMode === "dark"}
                    onChange={handleChange}
                    aria-label="Toggle theme"
                />

                {/* Track */}
                <div className="w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-indigo-500 transition-colors duration-300 relative">
                    {/* Optional icons inside track */}
                    <div className="absolute left-1 top-1 text-xs text-yellow-500 dark:text-yellow-300">
                        ☀
                    </div>
                    <div className="absolute right-1 top-1 text-xs text-indigo-200 dark:text-gray-300">
                        🌙
                    </div>
                </div>

                {/* Thumb */}
                <span
                    className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-transform duration-300
            peer-checked:translate-x-6 peer-checked:bg-gray-100"
                    aria-hidden="true"
                />

                <span className="sr-only">Theme toggle</span>
            </label>

            <span
                className={`text-sm font-medium transition-colors duration-300 
          ${themeMode === "dark" ? "text-white" : "text-gray-800"}`}
            >
                {themeMode === "dark" ? "Dark Mode" : "Light Mode"}
            </span>
        </div>
    );
}

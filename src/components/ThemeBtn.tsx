export default function ThemeBtn() {


    return (
        <div className="flex justify-center">
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 rounded-full peer-checked:bg-indigo-600 transition-colors duration-300 relative">
                </div>
                <span className="absolute w-4 h-4 bg-white rounded-full transition-transform duration-300 peer-checked:translate-x-full shadow" />

                <p className="dark:text-white">Theme</p>
            </label>

        </div>
    );
}


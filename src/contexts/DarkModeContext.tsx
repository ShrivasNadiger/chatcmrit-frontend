import { createContext, useContext, useState, type ReactNode } from "react";
import type { Mode, ModeType } from "../types/DarkModeContextTypes";


const DarkModeContext = createContext<ModeType>({
    themeMode: "light",
    setThemeMode: () => { },
    setisChecked: () => { },
});
export function DarkModeContextProvider({ children }: { children: ReactNode }) {
    const [themeMode, setThemeMode] = useState<Mode>("light");

    function setisChecked(checked: boolean) {
        setThemeMode(checked ? "dark" : "light");
    }

    return (
        <DarkModeContext.Provider value={{ setThemeMode, themeMode, setisChecked }}>
            {children}
        </DarkModeContext.Provider>
    )
}

export function useDarkMode() {
    return useContext(DarkModeContext);
}
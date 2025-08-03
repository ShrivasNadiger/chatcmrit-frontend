import { createContext, useContext, useState, type ReactNode } from "react";
type ThemeMode = "light" | "dark";
interface ThemeModeType {
    themeMode: ThemeMode,
    setThemeMode: React.Dispatch<React.SetStateAction<ThemeMode>>,
}

const ThemeContext = createContext<ThemeModeType>({
    themeMode: "light",
    setThemeMode: () => { },
});
export function ThemeContextProvider({ children }: { children: ReactNode }) {
    const [themeMode, setThemeMode] = useState<ThemeMode>("light");
    return (
        <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme() {
    return useContext(ThemeContext);
}
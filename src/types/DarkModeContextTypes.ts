export type Mode = "light" | "dark";

export interface ModeType {
    themeMode: Mode,
    setThemeMode: React.Dispatch<React.SetStateAction<Mode>>,
    setisChecked: (checked: boolean) => void,
}
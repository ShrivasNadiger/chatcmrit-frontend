import { createContext, type ReactNode, useContext, useState } from "react";

interface TextAreaContextType {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
}

const TextAreaContext = createContext<TextAreaContextType | undefined>(undefined);

export function TextAreaContextProvider({ children }: { children: ReactNode }) {
    const [text, setText] = useState<string>("");

    return (
        <TextAreaContext.Provider value={{ text, setText }}>
            {children}
        </TextAreaContext.Provider>
    )
}

export const useTextArea = () => {
    const ctx = useContext(TextAreaContext);
    if (!ctx) {
        throw new Error("useTextArea must be used within TextAreaProvider");
    }
    return ctx;
};
// textAreaContext.tsx
import { createContext, type ReactNode, useContext, useState } from "react";

type Sender = "user" | "bot";

interface TextAreaContextType {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
    sender: Sender;
    setSender: React.Dispatch<React.SetStateAction<Sender>>;
}

const TextAreaContext = createContext<TextAreaContextType | undefined>(undefined);

export function TextAreaContextProvider({ children }: { children: ReactNode }) {
    const [text, setText] = useState<string>("");
    const [sender, setSender] = useState<Sender>("user");

    return (
        <TextAreaContext.Provider value={{ text, setText, sender, setSender }}>
            {children}
        </TextAreaContext.Provider>
    );
}

export const useTextArea = () => {
    const ctx = useContext(TextAreaContext);
    if (!ctx) {
        throw new Error("useTextArea must be used within TextAreaContextProvider");
    }
    return ctx;
};

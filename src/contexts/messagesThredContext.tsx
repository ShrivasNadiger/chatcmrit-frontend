
import { createContext, useContext, useState, type ReactNode } from "react";
import type { Message, messagesContextType } from "../types/messageContextTypes";



const messagesContext = createContext<messagesContextType | undefined>(undefined);

export function MessagesContextProvider({ children }: { children: ReactNode }) {
    const [messages, setMessage] = useState<Message[]>([]);
    const addText = (newText: Message) => {
        setMessage((prev) => [...prev, newText])

    }

    return (
        <messagesContext.Provider value={{ messages, setMessage, addText, }}>
            {children}
        </messagesContext.Provider>
    );
}

export const usemessagesContext = () => {
    const ctx = useContext(messagesContext);
    if (!ctx) {
        throw new Error("usemessagesContext must be used within messagesContextProvider");
    }
    return ctx;
};

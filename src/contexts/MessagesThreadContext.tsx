
import { createContext, useContext, useState, type ReactNode } from "react";
import type { Message, MessagesContextType } from "../types/MessageContextTypes";




const MessagesContext = createContext<MessagesContextType | undefined>(undefined);

export function MessagesContextProvider({ children }: { children: ReactNode }) {
    const [messages, setMessage] = useState<Message[]>([]);
    const addText = (newText: Message) => {
        setMessage((prev) => [...prev, newText])

    }

    return (
        <MessagesContext.Provider value={{ messages, setMessage, addText, }}>
            {children}
        </MessagesContext.Provider>
    );
}

export const useMessagesContext = () => {
    const ctx = useContext(MessagesContext);
    if (!ctx) {
        throw new Error("usemessagesContext must be used within messagesContextProvider");
    }
    return ctx;
};

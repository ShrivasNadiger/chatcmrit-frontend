
import { createContext, useContext, useState, type ReactNode } from "react";
import useSendTextLLM from "../hooks/useSendTextLLM";
import type { Message, MessagesContextType } from "../types/MessageContextTypes";



const MessagesContext = createContext<MessagesContextType | undefined>(undefined);

export function MessagesContextProvider({ children }: { children: ReactNode }) {
    const { sendTextLLM } = useSendTextLLM();
    const [messages, setMessage] = useState<Message[]>([]);
    const addText = async(newText: Message) => {
        setMessage((prev) => [...prev, newText])
        const botReply =await sendTextLLM(newText.text);
        if (botReply) {
            setMessage((prev) => [...prev, botReply]);
        }
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

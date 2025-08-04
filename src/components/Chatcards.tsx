
import { useEffect, useRef } from "react";
import { useMessagesContext } from "../contexts/MessagesThreadContext";

export default function ChatCard() {
    const { messages } = useMessagesContext();
    const bottomRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "start", });
    }, [messages])
    return (

        <>
            {messages.length > 0 ? (
                messages.map((message, index) => {
                    const isUser = (message.textSource === "user");
                    return (
                        <div
                            key={index}
                            className={`w-full flex my-2 px-2 ${isUser ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`relative max-w-[75%] px-4 py-2 rounded-2xl text-sm leading-snug break-words
                                            ${isUser ? "bg-blue-100 dark:bg-blue-800 text-gray-900 dark:text-blue-100 self-end" : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 self-start"}
                                            shadow-sm dark:shadow-md
                                            transition-colors duration-200`}
                            >
                                {message.text}
                            </div>
                        </div>
                    )
                })
            ) : (
                <div className="text-gray-400 italic px-4 py-2">
                    You don't have any messages in this chat!
                </div>
            )
            }
            <div ref={bottomRef} />
        </>
    );
}


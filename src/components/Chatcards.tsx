import { useTextArea } from "../contexts/TextAreaContext";

export default function ChatCard() {
    const { text, sender } = useTextArea();
    const isUser = sender === "user";

    return (
        <div
            className={`
        w-full flex my-2 px-2
        ${isUser ? "justify-end" : "justify-start"}
      `}
        >
            <div
                className={`
          relative max-w-[75%] px-4 py-2 rounded-2xl
          text-sm leading-snug break-words
          ${isUser
                        ? "bg-blue-100 dark:bg-blue-800 text-gray-900 dark:text-blue-100 self-end"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 self-start"}
          shadow-sm dark:shadow-md
          before:content-[''] before:absolute
          ${isUser
                        ? "before:-right-2 before:top-2 before:border-l-[10px] before:border-l-transparent before:border-t-[10px] before:border-t-blue-100 dark:before:border-t-blue-800 before:rounded-bl-lg"
                        : "before:-left-2 before:top-2 before:border-r-[10px] before:border-r-transparent before:border-t-[10px] before:border-t-gray-100 dark:before:border-t-gray-800 before:rounded-br-lg"}
          transition-colors duration-200
        `}
            >
                {text || (
                    <span className="text-gray-400 italic">
                        {isUser ? "You haven't typed anything yet..." : "Waiting for bot..."}
                    </span>
                )}
            </div>
        </div>
    );
}


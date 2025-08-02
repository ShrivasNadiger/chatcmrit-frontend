import { useTextArea } from "../contexts/textAreaContext";

export default function ChatCard() {
    const { text, sender } = useTextArea();
    return (
        <div
            className={`
        w-full flex my-2 
                ${(sender === "user") ? "justify-end" : "justify-start"}
      `}
        >
            <div
                className={`
          max-w-[75%] px-4 py-2 rounded-lg
          ${(sender === "user") ? "bg-blue-200" : "bg-white-200"}
        `}
            >
                <div className="text-sm">{text}</div>
            </div>
        </div>
    );
}

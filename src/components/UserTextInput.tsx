import { useId, useState } from "react";
import { useMessagesContext } from "../contexts/MessagesThreadContext";
import { setKeyValues } from "../Key/UserTextInputKeyboardHandler";

function Input() {
    const textAreaId = useId();
    const { addText } = useMessagesContext();
    const [localValue, setLocalValue] = useState<string>("");

    const textInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setLocalValue(e.target.value);
    };
    const handelKeys = (e:React.KeyboardEvent) => {
        setKeyValues(e, { localValue, setLocalValue, addText });
    }
    const textBtnClicked = () => {
        if (localValue.trim() === "") {
            setLocalValue(""); return
        }
        addText({
            text: localValue.trim(),
            textSource: "user",
        })
        setLocalValue("");

    };

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
            <div className="max-w-[80vw] sm:w-[80vw] mx-auto px-2 py-3">
                <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                    <textarea
                        value={localValue}
                        name="chat-text-area"
                        id={textAreaId}
                        placeholder="Hi! I am our Assistant.. Ask me Anything about CMRIT.. "
                        onChange={textInput}
                        onKeyDown={handelKeys}
                        className="
              flex-1 resize-y min-h-[1.5rem] px-4 py-2 rounded-lg 
              border border-gray-300 dark:border-gray-600 
              bg-gray-50 dark:bg-gray-800 
              text-gray-900 dark:text-gray-100 
              focus:outline-none focus:ring-2 
              focus:ring-blue-500 dark:focus:ring-indigo-400 
              text-sm overflow-auto transition-colors duration-200
            "
                    ></textarea>
                    <button
                        onClick={textBtnClicked}
                        className="
              flex-none px-6 py-2 
              bg-blue-400 dark:bg-indigo-500 
              text-white font-medium rounded-lg 
              hover:bg-blue-700 dark:hover:bg-indigo-600 
              transition-colors duration-200
            "
                    >
                        Ask me
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Input;

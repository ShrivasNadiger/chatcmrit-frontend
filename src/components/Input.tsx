import { useId, useState } from "react";
import { useTextArea } from "../contexts/textAreaContext";

function Input() {
    const textAreaId = useId();
    const { setText, setSender } = useTextArea();
    const [localValue, setLocalValue] = useState<string>("");

    const textInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setLocalValue(e.target.value);
    }

    const textBtnClicked = () => {
        setText(localValue.trim())
        setLocalValue("");
        setSender("user")
    }
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/100 border-t border-gray-200">
            <div className="max-w-[80vw] sm:w-[80vw] mx-auto px-2 py-3">
                <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
                    <textarea
                        value={localValue}
                        name="chat-text-area"
                        id={textAreaId}
                        placeholder="Hi! I am our Assistant.. Ask me Anything about Cmrit "
                        onChange={textInput}
                        className="flex-1 resize-y min-h-[1.5rem] px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm overflow-auto"
                    ></textarea>
                    <button
                        onClick={textBtnClicked}
                        className="flex-none px-6 py-2 bg-blue-400 text-white font-medium rounded-lg hover:bg-blue-700 transition-200"
                    >
                        Ask me
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Input
import { useTextArea } from "../contexts/textAreaContext";
function Chatcards() {
    const { text } = useTextArea();
    return (
        <div className="flex items-end">
            <div className="max-w-[75%]">
                <div className="dark:text-white bg-blue-200 h-fit">
                    {text}
                </div>
            </div>
        </div>
    )
}

export default Chatcards
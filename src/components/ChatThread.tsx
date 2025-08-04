import Chatcards from "./Chatcards";

function ChatThread() {
    return (
        <div className="w-full my-2">
            <div className="w-full sm:mx-auto sm:w-[85vw] pb-20  dark:bg-gray-900 flex flex-col transition-colors duration-300">
                <Chatcards />
            </div>
        </div>
    );
}

export default ChatThread;

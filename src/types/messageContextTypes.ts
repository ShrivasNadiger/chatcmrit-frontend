export type Sender = "user" | "bot";

export interface Message {
    userid?: number,
    text: string,
    timestamp?: Date,
    textSource: Sender,
}

export interface MessagesContextType {
    messages: Array<Message>,
    setMessage: React.Dispatch<React.SetStateAction<Array<Message>>>,
    addText: (newText: Message) => void,
};
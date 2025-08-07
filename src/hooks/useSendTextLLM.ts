import { useState } from "react";
import type { Message } from "../types/MessageContextTypes";
import axios from "../utilities/axios";



export default function useSendTextLLM() {
  const [error, setError] = useState<Error|null>(null);
  const sendTextLLM = async(userInputText: string):Promise<Message |null> => {
    try {
      const response = await axios.post('/conversation', { prompt: userInputText });
      return response.data;
    } catch (err: unknown) {
      const typederr=err instanceof Error?err:new Error("Unknow Error Occured while Fetching...")
      setError(typederr);
      return null;
    }
  }

  return { sendTextLLM , error};
}

import type React from "react";
import type { handleInputKeyProps } from "../types/MessageContextTypes";




export const setKeyValues = (e:React.KeyboardEvent,props:handleInputKeyProps) => {
  props.isEnter= e.key === "Enter";
  
  props.isShiftEnter= (e.key === "Enter" && e.shiftKey);
  
  handleInputKeyfun(e,props);
}

const handleInputKeyfun = (e:React.KeyboardEvent,handleInputKey:handleInputKeyProps) => {

  if (handleInputKey.isEnter && handleInputKey.isShiftEnter) return;

  if (handleInputKey.isEnter) {
    e.preventDefault();
    
    if (handleInputKey.localValue.trim() === "") {
      handleInputKey.setLocalValue("");
      return;
    } else {
      handleInputKey.addText({ text: handleInputKey.localValue.trim(), textSource: "user" })
      handleInputKey.setLocalValue("");
    }
  }
}
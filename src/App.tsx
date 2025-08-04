// App.tsx
import { useEffect } from "react";
import ChatThread from "./components/ChatThread";
import Header from "./components/Header";
import Input from "./components/UserTextInput";
import { DarkModeContextProvider, useDarkMode } from "./contexts/DarkModeContext";
import { MessagesContextProvider } from "./contexts/MessagesThreadContext";

function Content() {
  const { themeMode } = useDarkMode();

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <MessagesContextProvider>
        <ChatThread />
        <Input />
      </MessagesContextProvider>
    </div>
  );
}

export default function App() {
  return (
    <DarkModeContextProvider>
      <Content />
    </DarkModeContextProvider>
  );
}

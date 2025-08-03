// App.tsx
import { useEffect } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import Input from "./components/Input";
import { TextAreaContextProvider } from "./contexts/TextAreaContext";
import { ThemeContextProvider, useTheme } from "./contexts/ThemeContext";

function Content() {
  const { themeMode } = useTheme();

  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(themeMode);
  }, [themeMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Header />
      <TextAreaContextProvider>
        <Body />
        <Input />
      </TextAreaContextProvider>
    </div>
  );
}

export default function App() {
  return (
    <ThemeContextProvider>
      <Content />
    </ThemeContextProvider>
  );
}

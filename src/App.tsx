import Body from "./components/Body"
import Header from "./components/Header"
import Input from "./components/Input"
import { TextAreaContextProvider } from "./contexts/textAreaContext"

function App() {


  return (
    <div className="dark:text-white dark:dg-black-200 ">
      <TextAreaContextProvider>
        <Header />
        <Body />
        <Input />
      </TextAreaContextProvider>
    </div>
  )
}

export default App

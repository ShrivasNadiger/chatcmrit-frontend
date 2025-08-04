import DarkModeBtn from "./DarkModeBtn";
import Logo from "./Logo";

function Header() {
    return (
        <header className="flex justify-between items-center px-4 py-2 sticky top-0 left-0 right-0 bg-white dark:bg-gray-900 
  border-b border-gray-200 dark:border-gray-700 
  shadow-sm dark:shadow-md transition-colors duration-300 z-10">
            <div className="flex items-center gap-3">
                <Logo />
                <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Chatcmrit
                </h1>
            </div>

            <div className="flex items-center gap-4">
                <DarkModeBtn />
            </div>
        </header>
    );
}

export default Header;

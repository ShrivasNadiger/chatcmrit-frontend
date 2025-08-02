import Logo from "./Logo"
import ThemeBtn from "./ThemeBtn"

function Header() {
    return (
        <div className="flex justify-between item-center px-4 sticky top-0 left-0 right-0 bg-gray-100">
            <Logo />
            <div className="flex items-center">
                <h1 className=" dark:text-white text-3xl">Chatcmrit</h1>
            </div>
            <div className="order-last flex justify-center item-center">
                <ThemeBtn />
            </div>
        </div>
    )
}

export default Header
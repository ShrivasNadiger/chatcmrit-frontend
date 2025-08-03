function Logo() {
    return (
        <div className="flex items-center">
            <img
                className="
          w-14 h-14 rounded-full 
          bg-white/80 dark:bg-gray-800 
          ring-2 ring-indigo-500 dark:ring-indigo-300 
          object-cover 
          filter transition-all duration-300 
          dark:brightness-90
          shadow-sm dark:shadow-lg
        "
                src="../logo_chatcmrit.jpg"
                alt="Chatcmrit logo"
            />
        </div>
    );
}

export default Logo;

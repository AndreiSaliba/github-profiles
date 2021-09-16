import { useTheme } from "@context/Theme";
import { IoMoon, IoSunnySharp } from "react-icons/io5";

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex items-center justify-between w-full h-16 max-w-2xl p-2">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-200">
                devfinder
            </h1>
            <button
                className="flex items-center justify-between w-[100px] font-bold px-4 py-1.5 mt-1 rounded-md text-md hover:bg-gray-300 dark:text-gray-200 dark:hover:bg-gray-800"
                onClick={() => toggleTheme()}
            >
                {theme?.toUpperCase()}
                <span className="pt-[1px]">{theme === "dark" ? <IoMoon /> : <IoSunnySharp />}</span>
            </button>
        </div>
    );
};

export default Header;

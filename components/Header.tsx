import Link from "next/link";
import { useTheme } from "@context/Theme";
import { IoMoon, IoSunnySharp } from "react-icons/io5";

const Header = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex items-center justify-between w-full h-16">
            <Link href="/">
                <h1 className="text-2xl font-bold text-gray-900 cursor-pointer dark:text-gray-200">
                    devfinder
                </h1>
            </Link>
            <button
                className="flex items-center justify-between w-[100px] font-bold px-4 py-1.5 mt-1 rounded-md text-md drop-shadow-sm hover:bg-light-primary dark:text-gray-100 dark:hover:bg-dark-primary"
                onClick={() => toggleTheme()}
            >
                {theme === "dark" ? "LIGHT" : "DARK"}
                {theme === "dark" ? (
                    <IoSunnySharp className="pt-[1px]" />
                ) : (
                    <IoMoon className="pt-[1px]" />
                )}
            </button>
        </div>
    );
};

export default Header;

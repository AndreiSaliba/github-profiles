import { IoSearch } from "react-icons/io5";

export const Search = () => {
    return (
        <div className="flex justify-between items-center w-full p-1.5 pl-4 rounded-lg h-[50px] bg-light-primary drop-shadow-sm dark:bg-dark-primary focus-within:ring-2 ring-color-primary">
            <div className="flex items-center w-full">
                <IoSearch className="mr-3 text-xl text-color-primary" />
                <input
                    type="text"
                    className="w-full mr-3 placeholder-gray-300 bg-transparent border-0 outline-none dark:text-white"
                    placeholder="Search GitHub username..."
                />
            </div>
            <button className="h-full px-4 font-semibold text-white rounded-lg bg-color-primary active:opacity-90">
                Search
            </button>
        </div>
    );
};

export default Search;

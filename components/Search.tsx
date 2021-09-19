import { useState } from "react";
import { useRouter } from "next/router";
import { IoSearch } from "react-icons/io5";

export const Search = () => {
    const [searchInput, setSearchInput] = useState<string>(null);
    const router = useRouter();
    
    return (
        <div className="flex justify-between items-center w-full p-1.5 pl-4 rounded-lg h-[50px] bg-light-primary drop-shadow-sm dark:bg-dark-primary focus-within:ring-2 ring-color-primary">
            <div className="flex items-center w-full">
                <IoSearch className="mr-3 text-xl text-color-primary" />
                <input
                    className="w-full mr-3 placeholder-gray-300 bg-transparent border-0 outline-none dark:text-white"
                    type="text"
                    placeholder="Search GitHub username..."
                    onInput={(e) => setSearchInput(e.currentTarget.value)}
                />
            </div>
            <button
                className="h-full px-4 font-semibold text-white rounded-lg bg-color-primary active:opacity-90"
                onClick={() =>
                    searchInput &&
                    router.push(`/${searchInput.replaceAll(" ", "")}`)
                }
            >
                Search
            </button>
        </div>
    );
};

export default Search;

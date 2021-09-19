import Header from "@components/Header";
import Search from "@components/Search";

export const Home = () => {
    return (
        <div className="flex flex-col items-center w-screen h-screen p-2 bg-light-secondary dark:bg-dark-secondary">
            <div className="box-border w-full max-w-3xl">
                <Header />
                <Search />
            </div>
        </div>
    );
};

export default Home;

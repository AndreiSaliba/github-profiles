import Header from "@components/Header";
import Search from "@components/Search";
import User from "@components/User";
import { UserProps } from "@utils/types";

const UserPage: React.FC<UserProps> = ({ userData }) => {
    userData.login ?? console.error(userData);
    return (
        <div className="flex flex-col items-center w-screen h-screen p-2 bg-light-secondary dark:bg-dark-secondary">
            <div className="box-border w-full max-w-3xl">
                <Header />
                <Search />
                {userData.login && <User userData={userData} />}
            </div>
        </div>
    );
};

export async function getServerSideProps(context) {
    const res = await fetch(
        `https://api.github.com/users/${context.params.user}`
    );
    const userData = await res.json();
    return { props: { userData } };
}

export default UserPage;

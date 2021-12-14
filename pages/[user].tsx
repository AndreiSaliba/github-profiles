import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "@components/Header";
import Search from "@components/Search";
import User from "@components/User";

const UserPage = () => {
    const router = useRouter();
    const { user } = router.query;
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        if (user) {
            fetch(`https://api.github.com/users/${user}`)
                .then((res) => res.json())
                .then(setUserData);
        }
    }, [user]);

    (userData && !userData?.login) && console.error(userData);

    return (
        <div className="flex flex-col items-center w-screen h-screen p-2 bg-light-secondary dark:bg-dark-secondary">
            <div className="box-border w-full max-w-3xl">
                <Header />
                <Search />
                {userData?.login && <User userData={userData} />}
            </div>
        </div>
    );
};

export default UserPage;

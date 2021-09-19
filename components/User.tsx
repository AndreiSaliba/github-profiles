import { MdPlace } from "react-icons/md";
import { HiLink } from "react-icons/hi";
import { ImTwitter } from "react-icons/im";
import { BsBuilding } from "react-icons/bs";

const User = ({ data: user }) => {
    return (
        <>
            {user && (
                <div className="w-full p-5 mt-5 font-mono rounded-lg bg-light-primary dark:bg-dark-primary dark:text-light-secondary">
                    <div className="grid grid-cols-user-grid grid-rows-user-grid">
                        <img
                            className="inline object-cover row-span-2 rounded-full"
                            src={user?.avatar_url}
                            width="110"
                            height="110"
                            alt=""
                        />
                        <div className="w-full row-span-1 pr-5 ml-5">
                            <div className="flex flex-col justify-between sm:flex-row">
                                <div className="flex flex-col">
                                    <span className="text-2xl font-bold dark:text-white">
                                        {user?.name}
                                    </span>
                                    <a
                                        href={user?.html_url}
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <span className="mt-0.5 text-sm text-color-primary">
                                            @{user?.login}
                                        </span>
                                    </a>
                                </div>
                                <span
                                    className="pt-0 text-sm dark:text-light-secondary sm:pt-1.5"
                                    suppressHydrationWarning
                                >
                                    Joined{" "}
                                    {new Date(
                                        user?.created_at
                                    ).toLocaleDateString("en-UK", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}
                                </span>
                            </div>
                        </div>
                        <div className="grid items-end row-start-3 mt-4 sm:mt-3 sm:row-start-2 sm:ml-5 col-span-full sm:col-start-2">
                            <span>
                                {user?.bio ?? "This profile has no bio."}
                            </span>
                            <div className="flex items-center justify-around w-full h-24 p-3 mt-5 rounded-lg bg-light-secondary dark:bg-dark-secondary">
                                <div className="flex flex-col">
                                    <span>Repos</span>
                                    <span className="text-2xl font-bold">
                                        {user?.public_repos}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span>Followers</span>
                                    <span className="text-2xl font-bold">
                                        {user?.followers}
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span>Following</span>
                                    <span className="text-2xl font-bold">
                                        {user?.following}
                                    </span>
                                </div>
                            </div>
                            <div className="grid gap-2 mt-4 text-sm xs:grid-cols-2">
                                {user?.location ? (
                                    <span className="flex items-center">
                                        <MdPlace className="mr-2" />
                                        {user?.location}
                                    </span>
                                ) : (
                                    <span className="flex items-center opacity-60">
                                        <MdPlace className="mr-2" />
                                        {"Not Available"}
                                    </span>
                                )}
                                {user?.company ? (
                                    <span className="flex items-center">
                                        <BsBuilding className="mr-2" />
                                        {user?.company}
                                    </span>
                                ) : (
                                    <span className="flex items-center opacity-60">
                                        <BsBuilding className="mr-2" />
                                        {"Not Available"}
                                    </span>
                                )}

                                {user?.blog ? (
                                    <a
                                        href={user?.blog}
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <span className="flex items-center">
                                            <HiLink className="mr-2" />
                                            {user?.blog}
                                        </span>
                                    </a>
                                ) : (
                                    <span className="flex items-center opacity-60">
                                        <HiLink className="mr-2" />
                                        {"Not Available"}
                                    </span>
                                )}

                                {user?.twitter_username ? (
                                    <a
                                        href={`https://twitter.com/${user?.twitter_username}`}
                                        target="_blank"
                                        rel="noopener"
                                    >
                                        <span className="flex items-center">
                                            <ImTwitter className="mr-2" />@
                                            {user?.twitter_username}
                                        </span>
                                    </a>
                                ) : (
                                    <span className="flex items-center opacity-60">
                                        <ImTwitter className="mr-2" />
                                        {"Not Available"}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default User;

import Link from "next/link";

import ThemeToggler from "./ThemeToggler";

const urls = [
    { href: "/blog", label: "Blog" },
    // { href: "/daily-updates", label: "Daily Updates" },
    // { href: "/inteviews", label: "Interviews" },
    { href: "/earnings", label: "Earnings" },
    { href: "/sponsors", label: "Sponsors" },
    // { href: "/about", label: "About" },
];

const Nav = ({ darkTheme, setDarkTheme }) => {
    return (
        <nav>
            <ul className="flex justify-between items-center py-8">
                <li>
                    <Link href="/">
                        <a className="text-purple-800 text-2xl dark:text-gray-100 font-bold no-underline">
                            MakeMoneyDev
                        </a>
                    </Link>
                </li>
                <ul className="flex justify-between items-center space-x-4 ml-auto">
                    {urls.map(({ href, label }) => (
                        <li key={`${href}${label}`}>
                            <Link href={href}>
                                <a className="font-bold dark:text-gray-100 no-underline hover:underline">
                                    {label}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* <ThemeToggler
                    darkTheme={darkTheme}
                    setDarkTheme={setDarkTheme}
                /> */}
            </ul>
        </nav>
    );
};

export default Nav;

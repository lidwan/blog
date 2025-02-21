// import SearchIcon from "../Search/SearchIcon.jsx";

import Link from "next/link";

function NavBar() {
    return (
        <nav className={"flex justify-between text-2xl px-8 py-8 max-sm:text-xl mb-[2vh]"}>
            <Link href={"/"} className={"text-white hover:no-underline hover:text-white text-left font-bold"}>Loay's Blog</Link>
            {/* <SearchIcon /> */}
            <div className={"text-right"}>Searchy search!</div>
        </nav>
    )
}

export default NavBar;
import NavBar from "./NavBar.js";
import Footer from "./Footer.js";
import Link from "next/link.js";


export default function NotFound() {
    return (
        <>
            <header><title>404 Page Not Found! | Loay&#39;s blog</title></header>
            <NavBar />
            <div className="pageNotFoundContainer">
                <h1>404, Post Not Found!</h1>
                <h2><Link href="/">Go Back Home</Link></h2>
            </div>
            <Footer />
        </>

    )
}
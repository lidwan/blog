import NavBar from "../../components/NavBar/NavBar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import {Link} from "react-router-dom";
import './notfound.css'


export default function NotFound() {
    return (
        <>
            <header><title>404 Page Not Found! | Loay&#39;s blog</title></header>
            <NavBar />
            <div className="pageNotFoundContainer">
                <h1>404, Page Not Found!</h1>
                <h2><Link to="/">Go Back Home</Link></h2>
            </div>
            <Footer />
        </>

    )
}
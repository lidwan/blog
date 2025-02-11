import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <>
            <NavBar />
            <div className="pageNotFoundContainer">
                <h1>404, Page Not Found!</h1>
                <h2><Link to="/">Go Back Home</Link></h2>
            </div>
            <Footer />
        </>

    )
}

export default NotFound
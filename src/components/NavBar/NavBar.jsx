import './navbar.css'
import SearchIcon from "../Search/SearchIcon.jsx";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-black navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" id="title" href="https://loayidwan.com/">Loay Idwan</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <SearchIcon />
                        <li className="nav-item">
                            <a className="nav-link" href="https://loayidwan.com/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://loayidwan.com/#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"
                               href="https://blog.loayidwan.com/">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://loayidwan.com/#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://loayidwan.com/#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
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

                        <li className="nav-item">
                            <a className="nav-link" href="https://loayidwan.com/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://loayidwan.com/pages/about.html">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page"
                               href="/">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://loayidwan.com/pages/projects.html">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://loayidwan.com/pages/contact.html">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
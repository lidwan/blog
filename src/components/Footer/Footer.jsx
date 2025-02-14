import './footer.css'

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <p className="footer">&copy; {currentYear} Loay&#39;s Blog</p>
    )
}

export default Footer;
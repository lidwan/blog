function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <p className="footer">&copy; {currentYear} Loay&#39;s Blog, Icons by &nbsp;<a href="https://icons8.com">icons8</a></p>
    )
}

export default Footer;
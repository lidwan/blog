function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <p className="flex justify-center items-center text-white mt-[3vh] p-4 max-lg:p-[3vw] max-sm:p-[5vw]">&copy; {currentYear} Loay&#39;s Blog</p>
    )
}

export default Footer;
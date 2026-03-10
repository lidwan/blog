"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchIcon from "./SearchIcon";
import styles from "./NavBar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/#featured", label: "Featured" },
  { href: "/#latest", label: "Latest" },
  { href: "https://loayidwan.com", label: "Portfolio", external: true },
];

function isActive(pathname, href) {
  return href === "/" && pathname === "/";
}

function NavBar() {
  const pathname = usePathname();

  return (
    <div className={styles.navWrap}>
      <nav className={styles.nav} aria-label="Primary">
        <Link href="/" className={styles.brand}>
          <span className={styles.brandTitle}>Loay&apos;s Blog</span>
        </Link>

        <div className={styles.links}>
          {links.map((link) => (
            link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className={styles.link}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.link} ${isActive(pathname, link.href) ? styles.linkActive : ""}`}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        <SearchIcon />
      </nav>
    </div>
  );
}

export default NavBar;

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchIcon from "./SearchIcon";
import styles from "./NavBar.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/#featured", label: "Featured" },
  { href: "/#latest", label: "Latest" },
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
          <span className={styles.brandMark} aria-hidden="true">
            L
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandTitle}>Loay&apos;s Blog</span>
            <span className={styles.brandSubtitle}>Notes on code and systems</span>
          </span>
        </Link>

        <div className={styles.links}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.link} ${isActive(pathname, link.href) ? styles.linkActive : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <SearchIcon />
      </nav>
    </div>
  );
}

export default NavBar;

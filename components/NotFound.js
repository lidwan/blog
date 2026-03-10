import Link from "next/link";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main className="page-shell">
        <section className="not-found-panel glass-panel">
          <p className="section-kicker">404</p>
          <h1>Post not found</h1>
          <p>The article you requested does not exist in this archive.</p>
          <Link href="/" className="inline-pill-link">
            Return home
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}

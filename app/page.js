import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import PostCard from "@/components/PostCard";
import ScrollToTop from "@/components/ScrollToTop";
import { getFeaturedPost, getLatestPosts } from "@/lib/posts";
import styles from "./page.module.css";

export default function Home() {
  const featuredPost = getFeaturedPost();
  const latestPosts = getLatestPosts();

  return (
    <main className={styles.main}>
      <NavBar />
      <div className="page-shell">
        <div className={styles.stack}>
          <section className={`glass-panel ${styles.hero}`}>
            <div className={styles.heroGrid}>
              <div className={styles.heroTop}>
                <p className="section-kicker">Editorial front page</p>
                <h1 className={`gradient-heading ${styles.title}`}>Quiet notes on code, tools, and modern computing.</h1>
                <p className={styles.intro}>
                  A minimal technical blog with a darker, calmer reading atmosphere. Long-form posts, compact how-tos,
                  and practical opinions, all presented like an editorial sibling to a modern portfolio.
                </p>
                <div className={styles.heroActions}>
                  <span className={styles.heroStat}>Premium dark reading surface</span>
                  <span className={styles.heroStat}>Markdown-backed archive</span>
                  <span className={styles.heroStat}>Clean, accessible layout</span>
                </div>
              </div>

              <aside className={styles.heroNote}>
                <p className="section-kicker">This issue</p>
                <p className={styles.heroNoteText}>
                  The archive focuses on practical software, open tools, Linux, and the tradeoffs that sit behind
                  modern developer workflows.
                </p>
                <Link href="#featured" className="inline-pill-link">
                  Read the featured essay
                </Link>
              </aside>
            </div>
          </section>

          <section id="featured" className={styles.section}>
            <div className={styles.sectionHeader}>
              <div>
                <p className="section-kicker">Featured</p>
                <h2 className={styles.sectionTitle}>Lead story</h2>
              </div>
              <p className={styles.sectionIntro}>A larger editorial card for the most prominent piece in the archive.</p>
            </div>

            <article className={`glass-panel ${styles.featured}`}>
              <div className={styles.featuredContent}>
                <p className="section-kicker">Featured essay</p>
                <h3 className={styles.featuredTitle}>{featuredPost.title}</h3>
                <p className={styles.featuredDescription}>{featuredPost.description}</p>
                <div className={styles.featuredMeta}>
                  <span>{featuredPost.dateCreated}</span>
                  <span>{featuredPost.readingTime}</span>
                </div>
                <div className={styles.featuredTags}>
                  {featuredPost.tags.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/posts/${featuredPost.id}`} className="inline-pill-link">
                  Open article
                </Link>
              </div>

              <div className={styles.featuredImageWrap}>
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  priority
                  sizes="(max-width: 920px) 100vw, 40vw"
                  className={styles.featuredImage}
                />
              </div>
            </article>
          </section>

          <section id="latest" className={styles.section}>
            <div className={styles.sectionHeader}>
              <div>
                <p className="section-kicker">Latest posts</p>
                <h2 className={styles.sectionTitle}>Recent writing</h2>
              </div>
              <p className={styles.sectionIntro}>
                Portfolio-style cards translated into an editorial archive, with restrained metadata and subdued motion.
              </p>
            </div>

            <div className={styles.latestGrid}>
              {latestPosts.map((post) => (
                <PostCard post={post} key={post.id} />
              ))}
            </div>
          </section>

          <section className={`glass-panel ${styles.callout}`}>
            <div className={styles.calloutText}>
              <p className="section-kicker">About this blog</p>
              <h2 className={styles.calloutTitle}>Built for deep reading, not feed-scrolling.</h2>
              <p className={styles.calloutDescription}>
                The design stays sparse on purpose: stronger typography, softer chrome, and just enough glass and glow to
                make the archive feel polished without competing with the writing.
              </p>
            </div>
            <a href="mailto:hello@loayidwan.com" className={`inline-pill-link ${styles.calloutLink}`}>
              Contact
            </a>
          </section>
        </div>
        <ScrollToTop />
      </div>
      <Footer />
    </main>
  );
}

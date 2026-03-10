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
          <section id="featured" className={styles.section}>
            <div className={styles.sectionHeader}>
              <div>
                <p className="section-kicker">Featured</p>
                <h2 className={styles.sectionTitle}>Lead story</h2>
              </div>
            </div>

            <article className={`glass-panel ${styles.featured}`}>
              <div className={styles.featuredContent}>
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
            </div>

            <div className={styles.latestGrid}>
              {latestPosts.map((post) => (
                <PostCard post={post} key={post.id} />
              ))}
            </div>
          </section>
        </div>
        <ScrollToTop />
      </div>
      <Footer />
    </main>
  );
}

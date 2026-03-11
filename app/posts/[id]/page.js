import fs from "fs";
import path from "path";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import PostedOn from "@/components/PostedOn";
import UpdatedOnAndTags from "@/components/UpdatedOnAndTags";
import ScrollToTop from "@/components/ScrollToTop";
import NotFound from "@/components/NotFound";
import posts, { getPostById } from "@/lib/posts";
import { flattenText, getHeadingsFromMarkdown, slugify } from "@/lib/post-utils";
import styles from "./page.module.css";

async function getPostData(postID) {
  const post = getPostById(postID);

  if (!post) {
    return null;
  }

  const filePath = path.join(process.cwd(), "public", post.file);
  const rawContent = fs.readFileSync(filePath, "utf-8");
  const content = rawContent.replace(/^#\s+.*\n+/, "");

  return { content, post };
}

export default async function Page({ params }) {
  const id = (await params).id;
  const postData = await getPostData(id);

  if (!postData) {
    return <NotFound />;
  }

  const { content, post } = postData;
  const headings = getHeadingsFromMarkdown(content);

  const markdownComponents = {
    h2: ({ children }) => {
      const text = flattenText(children);
      return <h2 id={slugify(text)}>{children}</h2>;
    },
    h3: ({ children }) => {
      const text = flattenText(children);
      return <h3 id={slugify(text)}>{children}</h3>;
    },
    a: ({ href, children, ...props }) => {
      const isExternal = href?.startsWith("http");

      if (!href) {
        return <a {...props}>{children}</a>;
      }

      return (
        <a href={href} {...props} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined}>
          {children}
        </a>
      );
    },
  };

  return (
    <main className={styles.main}>
      <NavBar />
      <div className="page-shell">
        <div className={styles.stack}>
          <section className={`glass-panel ${styles.hero}`}>
            <div className={styles.heroTop}>
              <Link href="/" className="inline-pill-link">
                Back to archive
              </Link>
              <p className="section-kicker">Article</p>
              <h1 className={`gradient-heading ${styles.heroTitle}`}>{post.title}</h1>
              <p className={styles.heroDescription}>{post.description}</p>
              <PostedOn date={post.dateCreated} readingTime={post.readingTime} />
              <div className={styles.heroTags}>
                {post.tags.map((tag) => (
                  <span key={tag} className="tag-pill">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <div className={styles.contentGrid}>
            <article className={`glass-panel ${styles.articlePanel}`}>
              <div className={styles.articleInner}>
                <div className={styles.prose}>
                  <ReactMarkdown rehypePlugins={[rehypeRaw]} components={markdownComponents}>
                    {content}
                  </ReactMarkdown>
                </div>
                <UpdatedOnAndTags date={post.dateModified} tags={post.tags} />
              </div>
            </article>

            {headings.length > 0 ? (
              <aside className={styles.toc}>
                <div>
                  <p className="section-kicker">On this page</p>
                </div>
                <nav className={styles.tocList} aria-label="Table of contents">
                  {headings.map((heading) => (
                    <a
                      key={heading.id}
                      href={`#${heading.id}`}
                      className={`${styles.tocLink} ${heading.level === 3 ? styles.tocIndent : ""}`}
                    >
                      {heading.title}
                    </a>
                  ))}
                </nav>
              </aside>
            ) : null}
          </div>
        </div>
        <ScrollToTop />
      </div>
      <Footer />
    </main>
  );
}

export async function generateMetadata({ params }) {
  const id = (await params).id;
  const postData = await getPostData(id);

  if (postData) {
    const { post } = postData;

    return {
      metadataBase: new URL("https://blog.loayidwan.com"),
      title: `${post.title} | Loay's Blog`,
      description: post.description,
      alternates: {
        canonical: `/posts/${post.id}`,
      },
      openGraph: {
        title: post.title,
        siteName: "Loay's Blog",
        description: post.description,
        type: "article",
        publishedTime: post.dateCreated,
        modifiedTime: post.dateModified,
        authors: "Loay Idwan",
        url: `/posts/${post.id}`,
        images: [
          {
            url: post.image,
            width: 1200,
            height: 630,
            alt: `Cover image for ${post.title}`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: post.title,
        description: post.description,
        siteName: "Loay's Blog",
        url: `/posts/${post.id}`,
        images: [post.image],
      },
      keywords: post.tags,
    };
  }
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    id: post.id,
  }));
}

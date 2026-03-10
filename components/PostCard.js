import Image from "next/image";
import Link from "next/link";
import styles from "./PostCard.module.css";

export default function PostCard({ post, compact = false }) {
  const visibleTags = compact ? post.tags.slice(0, 2) : post.tags.slice(0, 3);

  return (
    <Link href={`/posts/${post.id}`} className="card-link">
      <article className={styles.card} data-compact={compact ? "true" : "false"}>
        {post.image ? (
          <div className={styles.coverWrap}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes={compact ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
              className={styles.cover}
            />
          </div>
        ) : null}

        <div className={styles.body}>
          <span className={styles.eyebrow}>{post.featured ? "Featured essay" : "Latest post"}</span>
          <h3 className={styles.title}>{post.title}</h3>
          <p className={styles.description}>{post.description}</p>

          <div className={styles.meta} aria-label="Post metadata">
            <span className={styles.metaItem}>{post.dateCreated}</span>
            <span className={styles.metaItem}>{post.readingTime}</span>
          </div>

          <div className={styles.tags} aria-label="Tags">
            {visibleTags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}

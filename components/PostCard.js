import Link from "next/link";
import styles from "./PostCard.module.css";

export default function PostCard({ post, compact = false, variant = "default" }) {
  const visibleTags = compact ? post.tags.slice(0, 2) : post.tags.slice(0, 3);
  const cardClassName =
    variant === "search" ? `${styles.card} ${styles.searchCard}` : styles.card;

  return (
    <Link href={`/posts/${post.id}`} className="card-link">
      <article className={cardClassName} data-compact={compact ? "true" : "false"}>
        <div className={styles.body}>
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

const UpdatedOnAndTags = ({ date, tags }) => {
  return (
    <div className="article-footer-meta">
      <div className="tag-row" aria-label="Tags">
        {tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>
      <p className="article-footer-note">Updated {date}</p>
    </div>
  );
};

export default UpdatedOnAndTags;

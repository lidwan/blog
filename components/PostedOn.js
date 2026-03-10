const PostedOn = ({ date, readingTime }) => {
  return (
    <div className="article-meta-block">
      <span>{date}</span>
      <span className="article-meta-separator" aria-hidden="true">
        /
      </span>
      <span>{readingTime}</span>
      <span className="article-meta-separator" aria-hidden="true">
        /
      </span>
      <span>By Loay Idwan</span>
    </div>
  );
};

export default PostedOn;

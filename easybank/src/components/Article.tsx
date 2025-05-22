export interface ArticleProps {
  thumbnail: string;
  author: string;
  title: string;
  description: string;
}

export function Article({
  thumbnail,
  author,
  title,
  description,
}: ArticleProps) {
  return (
    <article className="article-entry group">
      <div className="h-1/2 w-full overflow-clip">
        <img src={thumbnail} alt={title} className="h-full" />
      </div>
      <div className="p-4 h-1/2 sm:mb-12">
        <p className="text-xs">By {author}</p>
        <button className="text-sm text-left group-hover:text-lime-green">
          {title}
        </button>
        <p className="text-[0.7rem] leading-4 line-clamp-2">{description}</p>
      </div>
    </article>
  );
}

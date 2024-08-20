import type { FC, ReactNode } from "react";

interface QuoteProps {
  content?: ReactNode;
  author?: string;
  to?: string;
  toText?: string;
  year?: number;
}

const Quote: FC<QuoteProps> = ({ content, author, to, toText, year }) => {
  return (
    <div className="mb-8">
      {content && (
        <blockquote className="border-l-4 border-stone-500 pl-4 font-medium">
          {content}
        </blockquote>
      )}
      {(author || to || year) && (
        <blockquote className="text-right">
          {author && author}
          {to && toText && (
            <>
              {author && ", "}
              <a
                href={to}
                target="_blank"
                rel="noopener noreferrer"
                className="italic"
              >
                {toText}
              </a>
            </>
          )}
          {year && (
            <>
              {(author || (to && toText)) && ", "}
              {year}
            </>
          )}
        </blockquote>
      )}
    </div>
  );
};

export default Quote;

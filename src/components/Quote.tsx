import type { FC } from "react";

interface QuoteProps {
  text: string;
  author: string;
  source: string;
  year: number;
}

const Quote: FC<QuoteProps> = ({ text, author, source, year }) => {
  return (
    <div className="mb-8">
      <blockquote className="border-l-4 border-stone-500 pl-4">
        "{text}"
      </blockquote>
      <blockquote className="text-right">
        {author}, <span className="italic">{source}</span>, {year}
      </blockquote>
    </div>
  );
};

export default Quote;

import type { FC } from "react";

export const FootnoteReference: FC<{
  id: string;
}> = ({ id }) => {
  const handleClick = () => {
    document
      .getElementById(`footnote-${id}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      type="button"
      id={`ref-${id}`}
      onClick={handleClick}
      className="footnote"
    >
      [{id}]
    </button>
  );
};

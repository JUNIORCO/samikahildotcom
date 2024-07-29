import type { FC } from "react";

export const Footnote: FC<{
  id: string;
  children: React.ReactNode;
}> = ({ id, children }) => {
  const handleBackClick = () => {
    document
      .getElementById(`ref-${id}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id={`footnote-${id}`}>
      <button
        type="button"
        onClick={handleBackClick}
        className="footnote inline-block mr-2"
      >
        [{id}]
      </button>
      <p className="inline">{children}</p>
    </div>
  );
};
